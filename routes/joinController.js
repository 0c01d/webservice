const express = require('express');
const router = express.Router();
const config = require("./../config");
const errorHandler = require("./abstractController");
const userService = require("./../backend/chatService");

/**
 * Render join page
 */
router.get('/', (req, res, next) => {
    // if (!auth.isAuth()) {
    res.render('join', {
        projectName: config.project.name,
        title: config.project.name + " | Join",
        pageType: "main"
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
        res.redirect('/join');
        return next(errors);
    } else {
        const userRequest = {
            comment: req.body.comment,
            newsId: req.body.newsId,
            name: req.body.name
        };
        try {
            const userResponse = await userService.createChat(userRequest);
            res.redirect('/join')
        } catch (error) {
            errorHandler(error, req, res, next);
        }
    }
});

module.exports = router;
