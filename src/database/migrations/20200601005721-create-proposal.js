'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('proposal', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                References: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            monitoria_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                References: { model: 'monitorias', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            proposta: {
                type: Sequelize.STRING,
                allowNull: false,
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

        return queryInterface.dropTable('proposal');

    }
};