const { Model, DataTypes } = require('sequelize');

class Monitoria extends Model {
    static init(connection) {
        super.init({
            title: DataTypes.STRING,
            scope: DataTypes.STRING,
            description: DataTypes.STRING,
        }, {
            sequelize: connection
        })

    }
}

module.exports = Monitoria;