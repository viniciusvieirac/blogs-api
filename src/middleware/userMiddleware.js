const { UserService } = require('../service');

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const validateUser = (req, res, next) => {
    const { displayName, password } = req.body;
    if (displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long',
        });
    }

    next();
};

const validateEmail = async (req, res, next) => {
    const { email } = req.body;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: '"email" must be a valid email',
        });
    }
    const user = await UserService.getByemail(email);
    if (user) {
        return res
            .status(409)
            .json({ message: 'User already registered' });
    }
    next();
};

module.exports = { validateUser, validateEmail };