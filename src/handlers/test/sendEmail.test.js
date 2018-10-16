const chai = require('chai')
const spies = require('chai-spies');
const Sinon = require('sinon');
const { emailHandler, transporter } = require('../sendEmail');

chai.use(spies);
const expect = chai.expect

const validPayload = {
  toAdress: 'random@random.com',
  subject: 'random subject',
  message: 'random message'
};


const invalidPayload = {
  toAdress: 'random@random.com',
  subject: 'random subject',
};

describe('The emailHandler', () => {
  it('should send an email when the validation passes', async () => {
    const sendSpy = chai.spy();
    const statusSpy = chai.spy();
    const res = {
      send: sendSpy,
      status: statusSpy
    };
    Sinon
      .stub(transporter, 'sendMail')
      .resolves();
    await emailHandler({ body: validPayload }, res);
    expect(sendSpy).to.have.been.called();
    transporter.sendMail.restore();
  });
  it('should send an error when the validation fails', () => {
    const sendSpy = chai.spy();
    const statusSpy = chai.spy();
    const res = {
      send: sendSpy,
      status: statusSpy
    };
    emailHandler({ body: invalidPayload }, res);
    expect(statusSpy).to.have.been.called();
    expect(sendSpy).to.have.been.called();
  });
  it('should send an error when the mailer fails', async () => {
    const sendSpy = chai.spy();
    const statusSpy = chai.spy();
    const res = {
      send: sendSpy,
      status: statusSpy
    };
    Sinon
      .stub(transporter, 'sendMail')
      .rejects();
    await emailHandler({ body: validPayload }, res);
    expect(statusSpy).to.have.been.called();
    expect(sendSpy).to.have.been.called();
    transporter.sendMail.restore();
  });
})
