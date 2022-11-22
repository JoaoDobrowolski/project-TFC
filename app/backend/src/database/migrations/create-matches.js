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
        homeTeam: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: home_team,
          references: {
            key: 'id',
            model: 'teams',
          },
        },
        homeTeamGoals: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: home_team_goals,
        },
        awayTeam: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: away_team,
          references: {
            key: 'id',
            model: 'teams',
          },
        },
        awayTeamGoals: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: away_team_goals,
        },
        inProgress: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          field: in_progress,
        }
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};
