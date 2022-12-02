import { INTEGER, Model, BOOLEAN } from 'sequelize';
import db from '.';
import Teams from './TeamsModel';

class Matches extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matches.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
    allowNull: false,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  modelName: 'matches',
  scopes: {
    all: { include: [
      { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
    ] },
    inProgress: { where: { inProgress: true },
      include: [
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      ] },
    finished: { where: { inProgress: false },
      include: [
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      ] },
    homeLeaderboard: { where: { inProgress: false },
    },
  },
});

Matches.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });

Teams.hasMany(Matches, { foreignKey: 'homeTeam', as: 'teamHome' });
Teams.hasMany(Matches, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Matches;
