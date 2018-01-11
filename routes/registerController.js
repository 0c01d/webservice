const express = require('express');
const router = express.Router();
const config = require("./../config");
const errorHandler = require("./abstractController");
const profileService = require("./../backend/profileService");

/**
 * Render join page
 */
router.get('/', (req, res, next) => {
    // if (!auth.isAuth()) {
    res.render('register', {
        projectName: config.project.name,
        title: config.project.name + " | Join",
        pageType: "register"
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
        res.redirect('/register');
        return next(errors);
    } else {
        const profileRequest = {
            firstname: req.body.firstname,
            middlename: req.body.middlename,
            lastname: req.body.lastname,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth

        };
        try {
            const profileResponse = await profileService.createProfile(profileRequest);
            res.redirect('/register')
        } catch (error) {
            errorHandler(error, req, res, next);
        }
    }
});

module.exports = router;