"use strict";

const rp = require('request-promise');
const config = require("../../config");
const getOptions = require("../../options");

const apiService = `http://${config.api.address}:${config.api.port}`;

class extendedprofileService {

    static createProfile(accessToken, extendedprofileRequest) {
        const options = getOptions(accessToken, apiService, `/profile/extended`, null, extendedprofileRequest);
        return rp.post(options);
    }

    static getExtendedprofileById(accessToken, id) {
        const options = getOptions(accessToken, apiService, `/profile/extended/${id}`, null, null);
        return rp.get(options);
    }

    static patchExtendedprofileById(accessToken, id, extrendedprofileRequest) {
        const options = getOptions(accessToken, apiService, `/profile/extended/${id}`, null, extrendedprofileRequest);
        return rp.patch(options);
    }

    static getExtendedprofileBy(accessToken, params) {
        const options = getOptions(accessToken, apiService, `/profile/extended/by`, params, null);
        return rp.get(options);
    }
}

module.exports = extendedprofileService;