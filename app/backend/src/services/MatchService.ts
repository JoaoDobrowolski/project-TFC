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
}
