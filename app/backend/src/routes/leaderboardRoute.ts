import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardRoute = Router();

leaderboardRoute.get('/home', LeaderboardController.getLeaderboardHome);

export default leaderboardRoute;
