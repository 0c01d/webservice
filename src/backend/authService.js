"use strict";

const rp = require('request-promise');
const config = require("../../config");
const getOptions = require("../../options");

const apiService = `http://${config.api.address}:8200`;

class authService {
    static login(nickname, password) {
        const options = getOptions(apiService, `/auth/login`, null, { nickname: nickname, password: password});
        return rp.post(options);
    }

    static check(tokenRequest) {
        const options = getOptions(apiService, `api/auth/token/check`, null, tokenRequest);
        return rp.post(options);
    }
    static refresh(refreshRequest) {
        const options = getOptions(apiService, `/auth/refresh`, null, refreshRequest);
        return rp.post(options);
    }
    static logout(tokenRequest) {
        const options = getOptions(apiService, `/auth/logout`, null, tokenRequest);
        return rp.post(options);
    }
    static createApp(appRequest) {
        const options = getOptions(apiService, `api/auth/oauth/app/`, null, appRequest);
        return rp.post(options);
    }
    static getApp(appId) {
        const options = getOptions(apiService, `api/auth/oauth/token/app/${appId}`, null, null);
        return rp.get(options);
    }
    static oauthLogin(oauthLoginRequest) {
        const options = getOptions(apiService, `api/auth/oauth/login`, null, oauthLoginRequest);
        return rp.post(options);
    }

}

module.exports = authService;