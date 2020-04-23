import Monitoria from '../models/Monitoria';
import User from '../models/User';

class MonitoriaController {
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

    }
    async index(req, res) {
        const user_id = req.params.user_id;
        const monitorias = await Monitoria.findAll();

        return res.json(monitorias);
    }
    async show(req, res) {
        const id = req.params.id;
        const monitoria = await Monitoria.findByPk(id).catch(err => {
            console.log(err);
        });
        return res.json(monitoria);
    }
    async update(req, res) {
        const { user_id, id } = req.params;
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({ erro: "User not found" });
        }
        const monitoria = await Monitoria.findByPk(id);
        if (!monitoria) {
            return res.status(400).json({ erro: "Monitoria not found" });
        }

        const { title, scope, description } = req.body;
        try {
            const result = await Monitoria.update({ title, scope, description }, { where: { user_id, id } });
            const monitoria = await Monitoria.findByPk(id);
            return res.json(monitoria);
        } catch (err) {
            return res.status(200).json({ erro: err });
        }
    }
    async delete(req, res) {
        const { user_id, id } = req.params;
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({ erro: "User not found" });
        }
        const monitoria = await Monitoria.findByPk(id);
        if (!monitoria) {
            return res.status(400).json({ erro: "Monitoria not found" });
        }
        if (user_id != monitoria.user_id) {
            return res.status(400).json({ erro: 'O usuário e monitoria não coincidem' });
        }
        await Monitoria.destroy({ where: { id } });
        return res.status(200).json({ message: 'Monitoria deletada com sucesso!' });
    }
}

export default new MonitoriaController();