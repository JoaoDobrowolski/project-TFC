import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchRoute = Router();

matchRoute.get('/', MatchController.getAll);

export default matchRoute;
