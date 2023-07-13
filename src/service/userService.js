const { User } = require('../models');

const createUser = ({ username, password }) => User.create({ username, password });

const getUsers = () => User.findAll();

const getByemail = (email) => User.findOne({ where: { email } });

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
    createUser,
    getUsers,
    getByemail,
    getByUserId,
};