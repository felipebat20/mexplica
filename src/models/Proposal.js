import { Model, DataTypes } from 'sequelize';

class Proposal extends Model {
    static init(connection) {
        super.init({
            proposta: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'proposal'
        })
    }

    static associate(models) {
        this.belongsTo(models.Monitorias, { foreignKey: 'monitoria_id', as: 'monitoria' });
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }

}

export default Proposal;