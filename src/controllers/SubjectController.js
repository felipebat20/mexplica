import Subject from '../models/Subject';

import User from '../models/User'


class SubjectController {
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

    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

    }

}

export default new SubjectController();