import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamRoute = Router();

teamRoute.get('/', TeamController.getAll);

teamRoute.get('/:id', TeamController.findById);

export default teamRoute;
