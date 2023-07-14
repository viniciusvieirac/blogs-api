const { getPayload } = require('../auth/authFunctions');

const validateJWT = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: 'Token not found',
        });
    }
    const token = authorization.split(' ')[1];
    const payload = getPayload(token);
    if (!payload) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.payload = payload;
    next();
};

const validateJWTWithBearer = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: 'Token not found',
        });
    }
    const payload = getPayload(authorization);
    if (!payload) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.payload = payload;
    next();
};

module.exports = {
    validateJWT,
    validateJWTWithBearer,
};