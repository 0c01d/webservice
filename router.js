"use strict";

const oauthController = require('./routes/oauthController');
const index = require('./routes/indexController');
const dashboard = require('./routes/dashboardController');

const join = require('./routes/joinController');
const login = require('./routes/loginController');

const register = require('./routes/registerController');
const recharge = require('./routes/rechargeController');
const rechargeQiwi = require('./routes/rechargeDepositController');
const signout = require('./routes/signoutController');
const api = require('./routes/apiController');
const profile = require('./routes/profileController');

const wallet = require('./routes/walletController');


function router(app) {

    app.use('/oauth', oauthController);
    app.use('/', index);
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
