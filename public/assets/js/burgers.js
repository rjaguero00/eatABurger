// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".add-burger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };
        $('#newburger').val('');
        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devour-btn").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        var newBurgerStatus = {
            devoured: 1
        };

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerStatus
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});