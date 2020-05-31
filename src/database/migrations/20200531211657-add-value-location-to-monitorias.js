'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('monitorias', 'value', {
                    type: Sequelize.DataTypes.DECIMAL
                }, { transaction: t }),
                queryInterface.addColumn('monitorias', 'location', {
                    type: Sequelize.DataTypes.STRING,
                }, { transaction: t })
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('monitorias', 'value', { transaction: t }),
                queryInterface.removeColumn('monitorias', 'location', { transaction: t })
            ]);
        });
    }
};