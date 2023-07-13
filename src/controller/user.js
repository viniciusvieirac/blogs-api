const { UserService } = require('../service');
const { createToken } = require('../auth/authFunctions');

const getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getUsers();
        const usersWithoutPassword = users.map((user) => {
            const { password, ...userWithoutPassword } = user.dataValues;
            return userWithoutPassword;
        });

        res.status(200).json(usersWithoutPassword);
    } catch (error) {
        console.log(error.message);
    }
};

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        const user = await UserService.createUser({ displayName, email, password, image });

        const { password: _password, ...userWithoutPassword } = user.dataValues;

        const payload = { data: userWithoutPassword };
        const token = createToken(payload);
        res
            .status(201)
            .json({ token });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao salvar o usuário no banco',
            error: error.message,
        });
    }
};

module.exports = {
    getAllUsers,
    createUser,
};