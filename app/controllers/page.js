"use strict";

const { viewRoot } = require("../../index.js");
const path = require("path");

module.exports.index = (req, res) => {
    res.render("page.html", { title: "page" },function(err, html) {
        res.send(html);
    });
};

module.exports.one = (req, res) => {

};
