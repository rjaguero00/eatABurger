var express = require("express");


// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


var router = express.Router();
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var handlebars = {
            burgers: data
        };
        res.render("index", handlebars);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([req.body.burger_name, req.body.devoured], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;


    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;