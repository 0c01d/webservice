const express = require('express');
const router = express.Router();
const config = require("./../config");
const errorHandler = require("./abstractController");
const registerService = require("../backend/registerService");

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
        const regProfileRequest = {
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            nickname: req.body.nickname,
            password: req.body.password

        };
        try {
            const regProfileResponse = await registerService.createRegProfile(regProfileRequest);
            res.redirect('/register')
        } catch (error) {
            errorHandler(error, req, res, next);
        }
    }
});

module.exports = router;