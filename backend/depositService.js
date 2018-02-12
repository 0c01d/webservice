"use strict";

const rp = require('request-promise');
const config = require("./../config");
const getOptions = require("./../options");

const apiService = `http://${config.api.address}:${config.api.port}`;

class depositService {

    static createDeposit(accessToken, depositRequest) {
        const options = getOptions(accessToken, apiService, "/deposit/", null, depositRequest);
        return rp.post(options);
    }

    static getDepositsByUUID(accessToken, page, size, uuid) {
        const options = getOptions(accessToken, apiService, `/deposit/`, { page: page, size: size, name: uuid }, null);
        return rp.get(options);
    }


}

module.exports = depositService;