const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) =>
    User.create({ displayName, email, password, image });

const getUsers = () => User.findAll();

const getByemail = (email) => User.findOne({ where: { email } });

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
    createUser,
    getUsers,
    getByemail,
    getByUserId,
};