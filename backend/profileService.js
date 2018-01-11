const rp = require('request-promise');
const config = require("./../config");
const getOptions = require("./../options");

const apiService = `http://${config.api.address}:${config.api.port}`;

class profileService {

    static createProfile(profileRequest) {
        const options = getOptions(apiService, `/client-service/profile`, null, profileRequest);
        return rp.post(options);
    }

}

module.exports = profileService;