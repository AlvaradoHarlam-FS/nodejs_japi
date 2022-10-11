const axios = require('axios');
require('dotenv').config();

const dataUsa = async () => {
    console.log('Real data');
    return await axios.get(`${process.env.dataUrl}`);
};

const dataUsaById = async (id) => {
    console.log('data type by ID');
    return await axios.get(`${process.env.dataUrl}${id}`);
};

module.exports = { dataUsa, dataUsaById };