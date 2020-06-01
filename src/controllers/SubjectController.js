import Subject from '../models/Subject';

import User from '../models/User'


class SubjectController {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'subjects' }
        });

        if (!user) {
            return res.json(error: 'User not found');
        }

        return res.json(user);

    }

    async store(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        const [subject] = await Subject.findOrCreate({
            where: { name }
        });

        console.log(subject);

        await user.addSubject(subject);
        return res.json(subject)

    }

    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const subject = await Subject.findOne({
            where: { name }
        });

        await user.removeSubject(subject);

        return res.json();
    }

}

export default new SubjectController();