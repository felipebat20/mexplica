const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        message: "Tudo certo?"
    });
});

module.exports = routes;