const Monitoria = require('../models/Monitoria');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const user_id = req.params.user_id;
        const { title, scope, description } = req.body;
        console.log(user_id);

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const monitoria = await Monitoria.create({ title, scope, description, user_id });
        return res.json(monitoria);

    },
    async index(req, res) {
        const user_id = req.params.user_id;
        const monitorias = await Monitoria.findAll({ where: { user_id: user_id } });

        return res.json(monitorias);
    },
    async show(req, res) {
        const id = req.params.id;
        const monitoria = await Monitoria.findByPk(id).catch(err => {
            console.log(err);
        });
        return res.json(monitoria);
    },
    async update(req, res) {

    },
    async delete(req, res) {

    },
}