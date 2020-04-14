const User = require('../models/User');
const bcrypt = require('bcrypt');


module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },
    async show(req, res) {

    },
    async store(req, res) {
        const { name, email } = req.body;

        const emailExists = await User.findOne({ where: { email: req.body.email } });
        if (emailExists) {
            return res.json({
                message: "Email já cadastrado."
            });
        };

        bcrypt.hash(req.body.password, 10, async(errBcrypt, hash) => {
            if (errBcrypt) { return res.status(500).send({ erro: errBcrypt }) };

            const user = await User.create({ name, email, password: hash }).catch(err => {
                console.log(err);
            });
            return res.json(user);
        });
    },
    async update(req, res) {

    },
    async destroy(req, res) {
        const id = req.params.id;
        await User.destroy()
    },
}