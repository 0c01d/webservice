"use strict";

const rp = require('request-promise');
const config = require("../../config");
const getOptions = require("../../options");

const apiService = `http://${config.api.address}:${config.api.port}`;

class accountService {

    static createProfile(accessToken, profileRequest) {
        const options = getOptions(accessToken, apiService, `/profile/`, null, profileRequest);
        return rp.post(options);
    }

    static getProfileById(accessToken, id) {
        const options = getOptions(accessToken, apiService, `/profile/${id}`, null, null);
        return rp.get(options);
    }

    static getProfileBy(accessToken, params) {
        const options = getOptions(accessToken, apiService, `/profile/`, params, null);
        return rp.get(options);
    }

    static updateProfileById(accessToken, id, profileRequest) {
        const options = getOptions(accessToken, apiService, `/profile/${id}`, null, profileRequest);
        return rp.patch(options);
    }

    static deleteProfileById(accessToken, id) {
        const options = getOptions(accessToken, apiService, `/profile/${id}`, null, null);
        return rp.delete(options);
    }
}

module.exports = accountService;