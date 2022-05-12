import 'jest';
import request from 'supertest'
import app from './../index';

describe('status integration tests', () => {
  
  it('can get server time', (done) => {
     request(app)
          .get('/api/v1/timezones')
          .end((err, res) => {
            expect(res.statusCode).toEqual(200)
            done();
          });
  });
  it('get 404 if wrong api is called', (done) => {
     request(app)
          .get('/api/v1/time')
          .end((err, res) => {
            expect(res.statusCode).toEqual(404)
            done();
          });
  });
  it('should match first object in array', (done) => {
    const germanTimeZone = {
      location: 'Germany',
      timezoneAbbr: 'CET',
      utcOffset: 1
      }
     request(app)
          .get('/api/v1/timezones')
          .end((err, res) => {
            expect(res.body[0]).toMatchObject(germanTimeZone);
            done();
          });
  });
 });
