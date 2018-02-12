"use strict";

const rp = require('request-promise');
const config = require("../../config");
const getOptions = require("../../options");

const apiService = `http://${config.api.address}:${config.api.port}`;

class payoutService {

    static createPayout(accessToken, payoutRequest) {
        const options = getOptions(accessToken, apiService, "/payout/", null, payoutRequest);
        return rp.post(options);
    }

    static getPayoutsByUUID(accessToken, page, size, uuid) {
        const options = getOptions(accessToken, apiService, `/payout/`, { page: page, size: size, name: uuid }, null);
        return rp.get(options);
    }


}

module.exports = payoutService;