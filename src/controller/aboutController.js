"use strict";

const express = require('express');
const router = express.Router();
const config = require("../../config");
const auth = require("../middleware/auth");

/**
 * Render about page
 */
router.get('/', async (req, res, next) => {
    const isAuth = !!req["accessToken"];
    const authUser = await auth.getCurrentProfile(req["accessToken"]);
    res.render('about', {
        projectName: config.project.name,
        isAuth: isAuth,
        authProfile: authProfile,
        title: `${config.project.name} | About`,
    });
});

module.exports = router;