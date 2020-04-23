'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password_hash: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            profile_photo: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            about_me_tutor: {
                type: Sequelize.STRING(500),
                allowNull: true,
            },
            about_me_student: {
                type: Sequelize.STRING(500),
                allowNull: true,
            },
            price_per_hour: {
                type: Sequelize.DECIMAL,
                allowNull: true,
            },
            tagline: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            scope_area: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },


            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },

        });

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.dropTable('users');

    }
};