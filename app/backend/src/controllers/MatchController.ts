import { Request, Response } from 'express';
import TeamService from '../services/TeamService';
import MatchService from '../services/MatchService';

export default class MatchController {
  static async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;

    if (inProgress === 'true') {
      const matches = await MatchService.getMatchesInProgress(true);

      return res.status(200).json(matches);
    }

    if (inProgress === 'false') {
      const matches = await MatchService.getMatchesInProgress(false);

      return res.status(200).json(matches);
    }

    const matches = await MatchService.getAll();

    res.status(200).json(matches);
  }

  static async saveMatch(req: Request, res: Response) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(422).json(
        { message: 'It is not possible to create a match with two equal teams' },
      );
    }

    const matchData = { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals };

    const homeTeamValidation = await TeamService.findById(homeTeam);
    const awayTeamValidation = await TeamService.findById(awayTeam);

    if (!homeTeamValidation || !awayTeamValidation) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    const matchSaved = await MatchService.saveMatch(matchData);

    return res.status(201).json(matchSaved);
  }

  static async finishedMatch(req: Request, res: Response) {
    const { id } = req.params;
    const msg = await MatchService.finishedMatch(Number(id));

    res.status(200).json(msg);
  }

  static async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const message = await MatchService.updateMatch(id, homeTeamGoals, awayTeamGoals);

    return res.status(200).json({ message });
  }
}
