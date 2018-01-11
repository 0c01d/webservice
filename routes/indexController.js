"use strict";

const express = require('express');
const router = express.Router();
const config = require("./../config");

router.get('/', (req, res, next) => {
    const pageType = "main";

    res.render('home', {
        projectName: config.project.name,
        title: config.project.name,
        pageType: pageType
    });
});

module.exports = router;