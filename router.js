"use strict";

const index = require('./routes/indexController');

const chats = require('./routes/chatController');

const join = require('./routes/joinController');

const register = require('./routes/registerController');

const login = require('./routes/loginController');

const recharge = require('./routes/rechargeController');

const rechargeQiwi = require('./routes/rechargeDepositController');

function router(app) {
    app.use('/', index);

    app.use('/chats', chats);

    app.use('/join', join);

    app.use('/register', register);

    app.use('/login', login);

    app.use('/cabinet/recharge', recharge);

    app.use('/cabinet/rechargedeposit', rechargeQiwi);

}

module.exports = router;
