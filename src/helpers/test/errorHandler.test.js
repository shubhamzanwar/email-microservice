const chai = require('chai')
const spies = require('chai-spies');

chai.use(spies);

const expect = chai.expect
const { errorHandler } = require('../errorHandler');

describe('the error handler function', () => {
  it('should log error to console', () => {
    const clgSpy = chai.spy.on(console, 'log');
    errorHandler({ error: true });
    expect(clgSpy).to.have.been.called();
  });
});
