const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Express Endpoints', () => {

  it('GET /rest/fotos/findAll/json', async () => {
      const res = await requestWithSupertest.get('/rest/fotos/findAll/json');
      expect(res.header['content-type']).toBe('application/json; charset=utf-8')
      expect(res.statusCode).toBe(200);
      // expect(res.body.length).toEqual(10);
  });

  it('GET /rest/fotos/findById/0/json', async () => {
       const res = await requestWithSupertest.get('/rest/fotos/findById/0/json');
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });

  it('POST /rest/fotos/save', async () => {
       const obj = {
            "titulo":"fotos10",
            "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "calificacion": "4.35",
            "ruta": "public/images/fotos10.png"
        }

       const res = await requestWithSupertest.post('/rest/fotos/save').send(obj);
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });

  it('PUT /rest/fotos/update', async () => {
       let result = await requestWithSupertest.get('/rest/fotos/findAll/json');
       let id = result.body[result.body.length-1]["id"]
       
       const obj = {
            "id": id,
            "titulo":"fotos11",
            "descripcion": "Vivamus dictum mollis lacus, eu accumsan ipsum vulputate elementum.",
            "calificacion": "8.26",
            "ruta": "public/images/fotos11.png"
        }

       const res = await requestWithSupertest.put('/rest/fotos/update').send(obj);
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });


  it('DELETE /delete/:id', async () => {
       let result = await requestWithSupertest.get('/rest/fotos/findAll/json');
       let id = result.body[result.body.length-1]["id"]

       const res = await requestWithSupertest.delete('/rest/fotos/delete/'+id);
       expect(res.header['content-type']).toBe('application/json; charset=utf-8')
       expect(res.statusCode).toBe(200);
  });



});