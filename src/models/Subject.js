import Sequelize, { Model, DataTypes } from 'sequelize';

class Subject extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'subjects',
        });
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'subject_id', through: 'user_subjects', as: 'users' });
    }


}

export default Subject;