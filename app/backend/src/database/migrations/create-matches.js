module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(
      'matches',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        home_team: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            key: 'id',
            model: 'teams',
          },
        },
        home_team_goals: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        away_team: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            key: 'id',
            model: 'teams',
          },
        },
        away_team_goals: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        in_progress: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        }
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};
