const express = require('express');
const router = express.Router();
const config = require("./../config");
const errorHandler = require("./abstractController");

/**
 * Render join page
 */
router.get('/', (req, res, next) => {
    // if (!auth.isAuth()) {
    res.render('cabinet', {
        projectName: config.project.name,
        title: config.project.name + " | PaymentSystems",
        pageType: "recharge"
    });


    // } else {
    // 	res.redirect('/');
    // }
});

module.exports = router;