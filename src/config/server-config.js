const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    MONGODBURL: process.env.MONGODBURL,
    ORIGIN: process.env.ORIGIN
}