const express = require('express');
const router = express.Router();
const config = require("./../config");
const errorHandler = require("./abstractController");
const auth = require("./../auth");
const extendedprofileService = require("../backend/extendedprofileService");

/**
 * Render join page
 */
router.get('/', (req, res, next) => {
    const isAuth = !!req["accessToken"];
    if (!isAuth) {
        const data = {
            projectName: config.project.name,
            title: config.project.name + " | Join",
            pageType: "main",
            isAuth: isAuth,
        };
        res.render('extendedprofile', data);
    } else {
        res.redirect("/");
    }
});

/**
 * Patch new extendedprofile
 */

router.post('/extendedprofile', async (req, res, next) => {
    // TODO: add all types of validation
    // req.checkBody('username', 'Name required').notEmpty();
    // req.checkBody('email', 'Email required').notEmpty();
    // req.checkBody('password', 'Password required').notEmpty();

    // TODO: add sanitize

    const errors = req.validationErrors();
    if (errors) {
        res.redirect('/join');
        return next(errors);
    } else {
        const profileRequest = {};
        if (req.body.firstname) profileRequest.firstname = req.body.firstname;
        if (req.body.middlename) profileRequest.middlename = req.body.middlename;
        if (req.body.lastname) profileRequest.lastname = req.body.lastname;
        if (req.body.gender) profileRequest.gender = req.body.gender;
        if (req.body.dateOfBirth) profileRequest.dateOfBirth = req.body.dateOfBirth;
        try {
            // TODO: get userId from login
            const profileId = parseInt('1', 10);
            if (!profileId) {
                // TODO: log that user is not found
                console.log("Error: profile not found");
            }
            else {
                const profileResponse = await extendedprofileService.patchExtendedprofileById(req["accessToken"], profileId, profileRequest);
            }
            auth.setCurrentProfile(profileResponse);
            // TODO: set auth info to user
            res.redirect('/join/info')
        } catch (error) {
            errorHandler(error, req, res, next);
        }
    }
});

/**
 * Render user set personalization page
 */
router.get('/personalize', function(req, res, next) {
    const isAuth = !!req["accessToken"];
    res.render('join', {
        projectName: config.project.name,
        title: config.project.name + " | Personalize",
        pageType: "personalize",
        isAuth: isAuth
    });
});

/**
 *
 */
router.post('/personalize', function (req, res, next) {

});

module.exports = router;