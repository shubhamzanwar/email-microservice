const request = require('supertest');
const app = require('../../../app');

describe('Testing email functionality', () => {
  test('/email API is exposed and gives expected response', (done) => {
    const postOptions = {
      toAdress: 'siddharth.lakhara@gmail.com',
      subject: 'testing',
      message: 'This mail was sent while testing',
    };
    request(app).post('/email').send(postOptions).then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('Email sent');
      done();
    });
  });
})
