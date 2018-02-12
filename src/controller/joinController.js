const express = require('express');
const router = express.Router();
const config = require("../../config");
const errorHandler = require("./abstractController");
const auth = require("../middleware/auth");
const profileService = require("../backend/profileService");

/**
 * Render join page
 */
router.get('/', (req, res, next) => {
    const isAuth = !!req["accessToken"];
    if (!isAuth) {
        const data = {
            projectName: config.project.name,
            title: config.project.name + " | Join",
            isAuth: isAuth,
        };
        res.render('home', data);
    } else {
        res.redirect("/");
    }
});

/**
 * Create new profile
 */
router.post('/', async (req, res, next) => {
    let errors = null;
    // TODO: add all types of validation
    req.checkBody('username', 'Name required').notEmpty();
    req.checkBody('email', 'Email required').notEmpty();
    req.checkBody('password', 'Password required').notEmpty();
    errors = req.validationErrors();
    // TODO: add sanitize
    // TODO: t&c is checked
    // req.checkBody('cbInput', 'Accept').isChecked();
    const username = req.body.username;
    if (!errors) {
        try {
            const profileByUsernameResponse = profileService.getProfileBy(req["accessToken"], { username: username });
            if (profileByUsernameResponse.username === username) errors.username = "Username already taken";
        } catch (error) {
            console.log("Error: couldn't find profile with username " + username)
        }

        const email = req.body.email;
        try {
            const profileByEmailResponse = profileService.getProfileBy(req["accessToken"], { regEmail: email });
            if (profileByEmailResponse.email === email) errors.email = "Email already taken";
        } catch (error) {
            console.log("Error: couldn't find profile with email" + {regEmail: email})
        }
    }
    if (errors) {
        res.body.errors = errors;
        res.redirect('/join');
        return next(errors);
    } else {
        const profileRequest = {
            username: req.body.username,
            regEmail: req.body.email,
            password: req.body.password
        };
        try {
            const profileResponse = await profileService.createProfile(req["accessToken"], profileRequest);
            auth.setCurrentProfile(profileResponse);
            res.redirect('/join/info')
        } catch (error) {
            errorHandler(error, req, res, next);
        }
    }
});

/**
 *
 */
router.get('/info', function(req, res, next) {
    const isAuth = !!req["accessToken"];
    res.render('join', {
        projectName: config.project.name,
        title: config.project.name + " | Info",
        pageType: "info",
        isAuth
    });
});

module.exports = router;
