"use strict";

const authService = require("../backend/authService");
const profileService = require("../backend/profileService");

class auth {
    static async getCurrentProfile(accessToken) {
        if(!!accessToken) {
            try {
                const profileResponse = await authService.check({ accessToken: accessToken});
                return await profileService.getProfileBy(accessToken, {username: profileResponse.username});
            } catch (error) {
                console.log('Error: profile not found');
            }
        } else {
            return false;
        }
    }

    static setCurrentProfile(profileRequest) {

    }

    static isAuth(){
        return true;
    }
}

module.exports = auth;