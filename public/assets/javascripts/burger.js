$('.change-eaten').on('click', function() {
    $.noConflict();
    const id = $(this).data('id');
    const newState = $(this).data('devour');

    $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: { devoured: newState }
    }).then(function() {
        console.log(`state changed to ${newState}`);
        location.reload();
    });
});

$('#burgerSubmit').on('click', function() {
    $.noConflict();
    const newBurger = {
        burger_name: $('#newBurger').val().trim(),
        devoured: false
    };

    $.ajax(`/api/burgers/`, {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log(`new burger added: ${newBurger}`);
        location.reload();
    });
});