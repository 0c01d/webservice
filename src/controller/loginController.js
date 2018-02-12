const express = require('express');
const router = express.Router();
const config = require("../../config");
const authService = require("../backend/authService");

router.get('/', function(req, res) {
    const isAuth = !!req["accessToken"];
    if (!isAuth) {
        res.render('login', {
            projectName: config.project.name,
            title: config.project.name,
            isAuth: isAuth
        });
    } else {
        res.redirect("/");
    }
});

router.post('/', async function (req, res) {
    if (!req.body || typeof req.body !== "object") { throw new Error("Login body is empty"); }
    const nickname = req.body.nickname;
    const password = req.body.password;
    const token = await authService.login(nickname, password);
    res.setHeader("Set-Cookie", token);
    res.redirect("/");
});

module.exports = router;
