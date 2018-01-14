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
        title: config.project.name + " | Deposit",
        pageType: "recharge-qiwi"
    });
    // } else {
    // 	res.redirect('/');
    // }
});

/*router.post('/', async (req, res, next) => {
    let errors = null;

    if(!errors) {

        const depositRequest = {

        }
        try {

        }
    }
})*/

module.exports = router;