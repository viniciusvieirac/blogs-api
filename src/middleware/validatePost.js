const validatePost = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    const { data } = req.payload;
    if (!title || !content || !categoryIds || !data) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

module.exports = validatePost;