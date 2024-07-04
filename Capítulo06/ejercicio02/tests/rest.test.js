const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Express Endpoints', () => {

  it('GET /users/findAll/json', async () => {
      const res = await requestWithSupertest.get('/users/findAll/json');
      expect(res.header['content-type']).toBe('application/json; charset=utf-8')
      expect(res.statusCode).toBe(200);
  });

  it('GET /users/findById/1/json', async () => {
       const res = await requestWithSupertest.get('/users/findById/1/json');
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });

  it('POST /users/save', async () => {
       const obj = {
              "email": "user1000@gmail.com",
              "username": "user1000",
              "password": "password"
          }

       const res = await requestWithSupertest.post('/users/save').send(obj);
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });

  it('PUT /users/update', async () => {
       let result = await requestWithSupertest.get('/users/findAll/json');
       let id = result.body[result.body.length-1]["id"]
       
       const obj = {
              "id": id,
              "email": "user3000@gmail.com",
              "username": "user3000",
              "password": "password"
          }

       const res = await requestWithSupertest.put('/users/update').send(obj);
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });


  it('DELETE /users/delete/:id', async () => {
       let result = await requestWithSupertest.get('/users/findAll/json');
       let id = result.body[result.body.length-1]["id"]

       const res = await requestWithSupertest.delete('/users/delete/'+id);
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });



});