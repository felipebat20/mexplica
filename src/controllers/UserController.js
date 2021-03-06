import User from '../models/User';
import Monitoria from '../models/Monitoria';
import Subject from '../models/Subject';
import Proposal from '../models/Proposal';


class UserController {
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    }
    async show(req, res) {
        const id = req.params.id;
        const userExists = await User.findByPk(id);

        if (!userExists) {
            return res.status(401).json({ erro: 'User not Found' })
        }

        try {
            const user = await User.findByPk(id, {
                include: [{
                        model: Monitoria,
                        as: 'monitorias',
                        attributes: ['id', 'title', 'scope', 'value', 'location', 'description'],
                        include: [{
                            association: 'proposals',
                            attributes: ['id', 'proposta'],
                            include: [{
                                association: 'user',
                                attributes: [
                                    'id',
                                    'name'
                                ]
                            }]
                        }]
                    },
                    {
                        model: Subject,
                        as: 'subjects',
                        attributes: ['id', 'name']
                    },
                    
                ]
            });
            return res.json(user);
        } catch (err) {
            console.log(err);
        }


    }
    async store(req, res) {
        const { name, email, password } = req.body;

        const emailExists = await User.findOne({ where: { email: req.body.email } });
        if (emailExists) {
            return res.json({
                message: "Email já cadastrado."
            });
        };

        const user = await User.create({ name, email, password }).catch(err => {
            console.log(err);
        });
        return res.json(user);
    }
    async update(req, res) {
        const { id } = req.params;
        const profile_photo = req.file.path;
        const { name, about_me_tutor, about_me_student, price_per_hour, tagline, scope_area } = req.body;


        try {
            const result = await User.update({ name, profile_photo, about_me_tutor, about_me_student, price_per_hour, tagline, scope_area }, { where: { id } });

            const user = await User.findByPk(id);
            return res.json(user);
        } catch (err) {
            console.log(err);
            return res.json({ erro: err });
        }


    }
    async destroy(req, res) {
        const { id } = req.params;

        const userExists = await User.findByPk(id);

        if (!userExists) { return res.status(404).send({ erro: "User not found" }) }

        await User.destroy({
            where: { id }
        });
        return res.send('Usuário deletado com sucesso!');
    }
}

export default new UserController();