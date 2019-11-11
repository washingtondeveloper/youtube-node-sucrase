import request from 'supertest';
import app from '../../src';

describe('Test Controller', () => {
	test('GET /contacts', (done) => {
		request(app).get('/contacts').expect('Content-Type', /json/).expect(200, done);
	});
});
