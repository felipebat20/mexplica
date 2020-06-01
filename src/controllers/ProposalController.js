import Proposal from '../models/Proposal';
import Monitoria from '../models/Monitoria';


class ProposalController {
    async store(req, res) {
        const { user_id, monitoria_id } = req.params;

        const { proposta } = req.body;

        const propostaCriada = await Proposal.create({ proposta, user_id, monitoria_id });

        return res.json(propostaCriada);

    }
}

export default new ProposalController();