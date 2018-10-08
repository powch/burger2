const connection = require('./connection.js');


function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

const orm = {
    selectAll: (tableName, cb) => {
        const queryStr = `SELECT * FROM ${tableName}`;
        connection.query(queryStr, (err, res) => {
            if (err) console.log(err);
            cb(res);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        const queryStr = `INSERT INTO ${table} (${cols}) VALUES ('${vals[0]}', ${vals[1]})`;
        connection.query(queryStr, (err, res) => {
            if(err) console.log(err);
            cb(res);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {
        const queryStr = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
        connection.query(queryStr, (err, res) => {
            if (err) console.log(err);
            cb(res);
        });
    }
}

module.exports = orm;