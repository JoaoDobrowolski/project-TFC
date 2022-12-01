import MatchInterface from '../interfaces/matchInterface';
import Match from '../database/models/MatchesModel';

export default class MatchService {
  static async getAll() {
    const Matches = await Match.findAll(
      {
        include: [
          { association: 'teamHome', attributes: ['teamName'] },
          { association: 'teamAway', attributes: ['teamName'] },
        ],
      },
    );

    return Matches;
  }

  static async getMatchesInProgress(inProgress: boolean) {
    const matches = await Match.findAll({
      where: { inProgress },
      include: [
        { association: 'teamHome', attributes: ['teamName'] },
        { association: 'teamAway', attributes: ['teamName'] },
      ],
    });

    return matches;
  }

  static async saveMatch(match: MatchInterface) {
    const saveMatchInProgress = await Match.create({
      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
      homeTeamGoals: match.homeTeamGoals,
      awayTeamGoals: match.awayTeamGoals,
      inProgress: true,
    });

    return saveMatchInProgress;
  }

  static async finishedMatch(id: string | number) {
    const matchFinished = await Match.update({ inProgress: false }, { where: { id } });

    return matchFinished;
  }

  static async updateMatch(id: string | number, homeTeamGoals: number, awayTeamGoals: number) {
    await Match.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
  }
}
