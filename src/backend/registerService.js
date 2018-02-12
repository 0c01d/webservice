const rp = require('request-promise');
const config = require("../../config");
const getOptions = require("../../options");

const apiService = `http://${config.api.address}:${config.api.port}`;

class registerService {

    static createRegProfile(regProfileRequest) {
        const options = getOptions(apiService, `/account/profile/wallet`, null, regProfileRequest);
        return rp.post(options);
    }

}
module.exports = registerService;