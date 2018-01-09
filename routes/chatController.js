const express = require('express');
const router = express.Router();
const config = require('./../config');
const errorHandler = require("./abstractController");
const chatService = require("./../backend/chatService");

router.get('/', async (req, res, next) => {
    const page = req.params.page || 0;
    const size = req.params.size || 10;
    try {
        const chatResponse = await chatService.getChat(page, size);
        res.render('chats', {
            projectName: config.project.name,
            title: config.project.name + " | Chat",
            chats: chatResponse.content
        });
    } catch (error) {
        errorHandler(error, req, res, next);
    }
});

module.exports = router;