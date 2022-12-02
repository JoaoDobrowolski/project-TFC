import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Matches test', () => {
  it('get matches', async () => {
    const matches = await chai.request(app).get('/matches');

    expect(matches.status).to.be.equal(200);
  });

  it('create matches', async () => {
    const matches = await chai
    .request(app)
    .post('/matches')
    .set({'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY5MjQ2ODIyfQ.RsWymztrAcokKgLiEf5-pjvhT172FmTL3RZ4fHRi42I'})
    .send({
      homeTeam: 8,
      awayTeam: 6,
      homeTeamGoals: 3,
      awayTeamGoals: 3,
    });

    const matchesEqualTeams = await chai
    .request(app)
    .post('/matches')
    .set({'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY5MjQ2ODIyfQ.RsWymztrAcokKgLiEf5-pjvhT172FmTL3RZ4fHRi42I'})
    .send({
      homeTeam: 8,
      awayTeam: 8,
      homeTeamGoals: 3,
      awayTeamGoals: 3,
    });

    expect(matches.status).to.be.equal(201);
    expect(matchesEqualTeams.status).to.be.equal(422);
  });

  it('invalid team matches', async () => {
    const matches = await chai
    .request(app)
    .post('/matches')
    .set({'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY5MjQ2ODIyfQ.RsWymztrAcokKgLiEf5-pjvhT172FmTL3RZ4fHRi42I'})
    .send({
      homeTeam: 'oi',
      awayTeam: 6,
      homeTeamGoals: 3,
      awayTeamGoals: 3,
    });
    expect(matches.status).to.be.equal(404);
  });

  it('invalid token matches', async () => {
    const match = await chai
    .request(app)
    .post('/matches')
    .set({'authorization': 'opa bao'})
    .send({
      homeTeam: 8,
      awayTeam: 6,
      homeTeamGoals: 3,
      awayTeamGoals: 3,
    });

    expect(match.status).to.be.equal(401);
  });
});
