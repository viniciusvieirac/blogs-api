const { UserService } = require('../service');
const { createToken } = require('../auth/authFunctions');

const isBodyValid = (email, password) => email && password;

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
        return res
            .status(400)
            .json({ message: 'Some required fields are missing' });
    }

    const user = await UserService.getByemail(email);

    if (!user || !password) {
        return res
            .status(400)
            .json({ message: 'Invalid fields' });
    }
    const { password: _password, ...userWithoutPassword } = user.dataValues;

    const payload = { data: userWithoutPassword };

    const token = createToken(payload);

    return res.status(200)
        .json({ username: user.username, token });
};

module.exports = { login };