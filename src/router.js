"use strict";

const oauthController = require('./controller/oauthController');
const index = require('./controller/indexController');
const dashboard = require('./controller/dashboardController');

const join = require('./controller/joinController');
const login = require('./controller/loginController');

const register = require('./controller/registerController');
const recharge = require('./controller/rechargeController');
const rechargeQiwi = require('./controller/rechargeDepositController');
const signout = require('./controller/signoutController');
const api = require('./controller/apiController');
const profile = require('./controller/profileController');

const wallet = require('./controller/walletController');


function router(app) {

    app.use('/', index);
    app.use('/oauth', oauthController);
    app.use('/dashboard', dashboard);

    app.use('/join', join);
    app.use('/login', login);
    app.use('/signout', signout);

    // app.use('/chats', chats);

    app.use('/register', register);

    app.use('/cabinet/recharge', recharge);
    app.use('/cabinet/rechargedeposit', rechargeQiwi);

    app.use('/api', api);
    app.use('/user', profile);

    app.use('/wallet', wallet);


}

module.exports = router;
