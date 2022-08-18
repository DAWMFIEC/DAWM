const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Express Endpoints', () => {

  it('GET /movies', async () => {
      const res = await requestWithSupertest.get('/movies');
      expect(res.header['content-type']).toBe('application/json; charset=utf-8')
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toEqual(579);
  });

  it('GET /movies/150', async () => {
       const res = await requestWithSupertest.get('/movies/150');
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });

  it('POST /movies/579', async () => {
       const obj = {
            "genre": "Adventure",
            "inflation_adjusted_gross": "",
            "movie_title": "Red",
            "mpaa_rating": "PG-13",
            "release_date": "",
            "total_gross": ""
        }

       const res = await requestWithSupertest.post('/movies/579',  obj);
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });

  it('PUT /movies/579', async () => {
       const obj = {
            "genre": "Adventure",
            "inflation_adjusted_gross": "",
            "movie_title": "Red",
            "mpaa_rating": "PG-13",
            "release_date": "2022-11-03",
            "total_gross": "6461212"
        }

       const res = await requestWithSupertest.put('/movies/579',  obj);
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });


  it('DELETE /movies/579', async () => {
       
       const res = await requestWithSupertest.delete('/movies/579');
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });


});