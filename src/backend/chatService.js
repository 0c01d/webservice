const rp = require('request-promise');
const config = require("../../config");
const getOptions = require("../../options");

const apiService = `http://${config.api.address}:${config.api.port}`;

class chatService {

    static createChat(chatRequest) {
        const options = getOptions(apiService, `/chat-service/chatnews`, null, chatRequest);
        return rp.post(options);
    }

}

module.exports = chatService;
