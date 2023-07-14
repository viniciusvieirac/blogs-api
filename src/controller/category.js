const { CategoryService } = require('../service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: '\"name\" is required' });
    }
    const category = await CategoryService.createCategory(name);
    return res.status(201).json(category);
};

module.exports = {
    createCategory,
}