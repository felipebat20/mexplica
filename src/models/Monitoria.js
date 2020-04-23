import { Model, DataTypes } from 'sequelize';

class Monitorias extends Model {
    static init(connection) {
        super.init({
            title: DataTypes.STRING,
            scope: DataTypes.STRING,
            description: DataTypes.STRING,
        }, {
            sequelize: connection
        })

    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

export default Monitorias;