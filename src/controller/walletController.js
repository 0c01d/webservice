const express = require('express');
const router = express.Router();
const config = require("../../config");
const auth = require("../middleware/auth");
const errorHandler = require("./abstractController");
const profileService = require("../backend/profileService");

router.get('/:username', async (req, res, next) => {
    const isAuth = !!req["accessToken"];
    const authProfile = await auth.getCurrentProfile(req["accessToken"]);
    const data = {
        projectName: config.project.name,
        title: config.project.name,
        isAuth: isAuth,
        authProfile: authProfile,
    };
    const username = req.params.username;
    try {
        const profileResponse = await profileService.getProfileBy(req["accessToken"], {username: username});
        data.profile = profileResponse;
        data.title = config.project.name + " | " + profileResponse.username;

        res.render('user', data);
    } catch (error) {
        errorHandler(error, req, res, next);
    }
});

module.exports = router;