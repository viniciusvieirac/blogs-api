const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seuSegredoSecreto';
const jwtConfig = { algorithm: 'HS256', expiresIn: '15m' };

const createToken = (payload) => jwt.sign(payload, secret, jwtConfig);

const getPayload = (token) => {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (error) {
        return null;
    }
};

module.exports = { createToken, getPayload };