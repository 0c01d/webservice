"use strict";

const rp = require('request-promise');
const config = require("./../config");
const getOptions = require("./../options");

const apiService = `http://${config.api.address}:${config.api.port}`;

class walletService {

    static createWallet(accessToken, walletRequest) {
        const options = getOptions(accessToken, apiService, "/wallet/", null, walletRequest);
        return rp.post(options);
    }

    static getWalletByUUID(accessToken, uuid) {
            const options = getOptions(accessToken, apiService, `/wallet/${uuid}`, null, null);
        return rp.get(options);
    }


    static deleteComponentByUUID(accessToken, uuid) {
        const options = getOptions(accessToken, apiService, `/wallet/${uuid}` , null, null);
        return rp.delete(options);
    }

}

module.exports = walletService;