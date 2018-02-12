"use strict";

module.exports = (handler) => {
    return async (req, res, next) => {
        await handler(req, res, next)
            .catch(error => next(req, res, next, error));
    }
};
