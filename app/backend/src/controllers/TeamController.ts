import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  static async getAll(req: Request, res: Response) {
    const teams = await TeamService.getAll();

    res.status(200).json(teams);
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    const result = await TeamService.findById(id);

    return res.status(200).json(result);
  }
}
