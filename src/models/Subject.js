import Sequelize, { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
class Subject extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: connection
        });
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'subject_id', through: 'user_subjects', as: 'users' });
    }


}

export default Subject;