const express = require('express');
const router = express.Router();
const config = require("./../config");
const errorHandler = require("./abstractController");
const profileService = require("../backend/registerService");

/**
 * Render join page
 */
router.get('/', (req, res, next) => {
    // if (!auth.isAuth()) {
    res.render('register', {
        projectName: config.project.name,
        title: config.project.name + " | Join",
        pageType: "login"
    });

    // } else {
    // 	res.redirect('/');
    // }
});

/**
 * Create new user
 */
router.post('/', async (req, res, next) => {

    let errors = null;

    if (errors) {
        res.body.errors = errors;
        res.redirect('/login');
        return next(errors);
    } else {
        const profileRequest = {
            email: req.body.email,
            password: req.body.password,

        };
        try {
            const profileResponse = await profileService.createProfile(profileRequest);
            res.redirect('/login')
        } catch (error) {
            errorHandler(error, req, res, next);
        }
    }
});

module.exports = router;