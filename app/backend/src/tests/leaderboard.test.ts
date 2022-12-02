import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Leaderboard test', () => {
  it('get leaderboard home', async () => {
    const leaderboard = await chai.request(app).get('/leaderboard/home');

    expect(leaderboard.status).to.be.equal(200);
  });
});
