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

  test('input validations: requires toAdress', (done) => {
    const postOptions = {
      message: 'This mail was sent while testing',
    };
    request(app).post('/email').send(postOptions).then((response) => {
    //   console.log(response.statusCode);
    //   console.log(response.text);
      expect(response.statusCode).toBe(400);
      expect(response.text).toBe('recipients address is required');
      done();
    });
  });

  test('input validations: rejects invalid email', (done) => {
    const postOptions = {
      toAdress: 'siddharth.lakhara',
      message: 'This mail was sent while testing',
    };
    request(app).post('/email').send(postOptions).then((response) => {
      expect(response.statusCode).toBe(400);
      expect(response.text).toBe('recipients address is required');
      done();
    });
  });

  test('input validations: requires message', (done) => {
    const postOptions = {
      toAdress: 'siddharth.lakhara@gmail.com',
    };
    request(app).post('/email').send(postOptions).then((response) => {
      //   console.log(response.statusCode);
      //   console.log(response.text);
      expect(response.statusCode).toBe(400);
      expect(response.text).toBe('Message body is required');
      done();
    });
  });
})
