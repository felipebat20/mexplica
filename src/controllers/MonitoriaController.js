const Monitoria = require('../models/Monitoria')
module.exports = {
    async store(req, res) {
        const { user_id } = req.params;
        const { title, scope, description } = req.body;
        const monitoria = await Monitoria.create({ title, scope, description, user_id });
    }
}