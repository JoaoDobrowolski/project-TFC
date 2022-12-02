import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Login test', () => {
  it('valid login', async () => {
    const login = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'secret_admin',
    });

    expect(login.status).to.be.equal(200);
  });

  it('invalid login', async () => {
    const login = await chai.request(app).post('/login').send({
      email: 'opa@bao.com',
      password: 'opaBao',
    });

    expect(login.status).to.be.equal(401);
  });

  it('invalid structure', async () => {
    const login = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
    });

    expect(login.status).to.be.equal(400);
  });

  it('valid token', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY5MjQ2ODIyfQ.RsWymztrAcokKgLiEf5-pjvhT172FmTL3RZ4fHRi42I';

    const login = await chai.request(app).get('/login/validate').set({
      'authorization': token,
    });

    expect(login.status).to.be.equal(200);
  });

  it('invalid token', async () => {
    const login = await chai.request(app).get('/login/validate');
    const token = 'invalid ;s';

    const loginAuthorization = await chai.request(app).get('/login/validate').set({
      'authorization': token,
    });

    expect(login.status).to.be.equal(401);
    expect(loginAuthorization.status).to.be.equal(401);
  });
});
