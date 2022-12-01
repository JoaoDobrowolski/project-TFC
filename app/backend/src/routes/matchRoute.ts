import { Router } from 'express';
import MatchController from '../controllers/MatchController';
import TokenValidation from '../middlewares/TokenValidation';

const matchRoute = Router();

matchRoute.get('/', MatchController.getAll);

matchRoute.post('/', TokenValidation.validateToken, MatchController.saveMatch);

matchRoute.patch('/:id/finish', MatchController.finishedMatch);

matchRoute.patch('/:id', MatchController.updateMatch);

export default matchRoute;
