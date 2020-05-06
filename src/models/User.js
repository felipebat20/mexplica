import Sequelize, { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING,
            profile_photo: DataTypes.STRING,
            about_me_tutor: DataTypes.STRING,
            about_me_student: DataTypes.STRING,
            price_per_hour: DataTypes.DECIMAL,
            tagline: DataTypes.STRING,
            scope_area: DataTypes.STRING
        }, {
            sequelize: connection
        });
        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 10)
            }
        });
        return this;
    }
    static associate(models) {
        this.hasMany(models.Monitorias, { foreignKey: 'user_id', as: 'monitorias' });
        this.belongsToMany(models.Subject, { foreignKey: 'user_id', through: 'user_subjects', as: 'subjects' });
    }
    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }

}

export default User;