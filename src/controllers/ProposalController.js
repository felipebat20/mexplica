import Proposal from '../models/Proposal';
import Monitoria from '../models/Monitoria';
import User from '../models/User';


class ProposalController {
    async store(req, res) {
        const { user_id, monitoria_id } = req.params;

        const { proposta } = req.body;

        const propostaCriada = await Proposal.create({ proposta, user_id, monitoria_id });

        return res.json(propostaCriada);

    }
    async index(req, res) {
        const { user_id, monitoria_id } = req.params;

        const monitoria = await Monitoria.findByPk(monitoria_id, {
            include: [{
                    association: 'user',
                    attributes: ['id', 'name', 'email']
                },
                {
                    association: 'proposals',
                    attributes: ['id', 'proposta'],
                    include: [{
                        association: 'user',
                        attributes: [
                            'id',
                            'name'
                        ]
                    }]
                },
            ]
        });

        return res.json(monitoria);
    }
}

export default new ProposalController();