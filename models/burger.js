// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (vals, cb) {
        // orm.insertOne("burgers", "burger_name", "devoured", vals, function (res) {
        //     cb(res);
        // });
        orm.insertOne("burgers", "burger_name", vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    // delete: function (condition, cb) {
    //     orm.delete("burgers", condition, function (res) {
    //         cb(res);
    //     });
    // }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;