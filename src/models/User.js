const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            profile_photo: DataTypes.STRING,
            about_me_tutor: DataTypes.STRING,
            about_me_student: DataTypes.STRING,
            price_per_hour: DataTypes.DECIMAL,
            tagline: DataTypes.STRING,
            scope_area: DataTypes.STRING
        }, {
            sequelize: connection
        })

    }
}

module.exports = User;