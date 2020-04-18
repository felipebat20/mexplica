require('dotenv/config');
module.exports = {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: process.env.DB_DIALECT,
    define: {
        timestamps: true,
        underscored: true,
    },
};