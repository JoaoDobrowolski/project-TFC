import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Teams test', () => {
  it('get all teams', async () => {
    const response = await chai.request(app).get('/teams');

    expect(response.status).to.be.equal(200);
  });

  it('team by id', async () => {
    const response = await chai.request(app).get('/teams/5');

    expect(response.status).to.be.equal(200);
  });
});
