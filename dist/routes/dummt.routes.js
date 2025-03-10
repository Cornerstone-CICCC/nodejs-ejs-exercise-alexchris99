"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// create the instance
const dummyRouter = (0, express_1.Router)();
const contacts = [
    { name: "Chris Jimenez", celphone: "1223-324", mail: "dummy@mail.outlook.com" },
    { name: "Clhoe Ro", celphone: "123432432", mail: "dummy@mail.outlook.com" }
];
// Home
dummyRouter.get("/", (req, res) => {
    res.status(200).render("index");
});
// about us
dummyRouter.get("/about-us", (req, res) => {
    res.status(200).render("about");
});
// Contact
dummyRouter.get("/contact", (req, res) => {
    res.status(200).render("contact", { contacts });
});
exports.default = dummyRouter;
