const { Category } = require('../models');

const createCategory = async (name) => {
    try {
        const category = await Category.create({ name });
        return category;
    } catch (error) {
        console.log(error.message);
    }
};

const getAllCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};


module.exports = {
    createCategory,
    getAllCategories,
};