import Team from '../database/models/TeamsModel';

export default class TeamService {
  static async getAll() {
    const teams = await Team.findAll();
    return teams;
  }

  static async findById(id: number | string) {
    const team = await Team.findByPk(id);

    return team;
  }
}
