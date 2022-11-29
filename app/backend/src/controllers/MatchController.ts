import { Request, Response } from 'express';
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
}
