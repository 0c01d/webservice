"use strict";

const index = require('./routes/indexController');

const chats = require('./routes/chatController');

const join = require('./routes/joinController');

function router(app) {
    app.use('/', index);

    app.use('/chats', chats);

    app.use('/join', join);

}

module.exports = router;
