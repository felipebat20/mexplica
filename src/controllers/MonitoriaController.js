import Monitoria from '../models/Monitoria';
import User from '../models/User';

class MonitoriaController {
    async store(req, res) {
        const { user_id } = req.params;
        const { title, scope, value, location, description } = req.body;
        console.log(user_id);

        const user = await User.findByPk(user_id).catch(err => {
            console.log(err);
        });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        const monitoria = await Monitoria.create({ title, scope, value, location, description, user_id });


        return res.json(monitoria);

    }

    //Retorna todas as monitorias de um usuário especifíco
    async list(req, res) {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id, {
            include: [{
                model: Monitoria,
                as: 'monitorias',
                attributes: ['id', 'title', 'scope', 'value', 'location', 'description']
            }]
        });



        return res.json(user);
    }

    //Retorna todas as monitorias
    async index(req, res) {
        const monitorias = await Monitoria.findAll({
            include: [{
                model: User,
                as: 'user',
                attributes: ['id', 'name', 'email']
            }]
        });


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
        let monitoria = await Monitoria.findByPk(id);
        if (monitoria.user_id != user_id) {
            return res.status(401).json({ error: "User is not authorized " });
        }

        if (!monitoria) {
            return res.status(400).json({ erro: "Monitoria not found" });
        }

        const { title, scope, value, location, description } = req.body;

        monitoria = await Monitoria.update({ title, scope, value, location, description }, { where: { user_id: user_id, id: id } });

        monitoria = await Monitoria.findByPk(id);
        return res.json(monitoria);

    }
    async delete(req, res) {
        const { user_id, id } = req.params;
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({ erro: "User not found" });
        }
        const monitoria = await Monitoria.findByPk(id, );
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