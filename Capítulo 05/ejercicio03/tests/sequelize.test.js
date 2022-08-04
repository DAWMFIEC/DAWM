const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

const Photo = require('../models').photo;  

describe('Express Models', () => {

  it('Testing model: Photo - findAll', async () => {
      let photos = await Photo.findAll()
      await expect(photos.length).toEqual(6);
  });

  it('Testing model: Photo - findOne', async () => {
      let photo = await Photo.findOne({ where: { tiempo: '19 mins' } })
      await expect(photo.url).toEqual('https://randomwordgenerator.com/img/picture-generator/52e3d4404852ac14f1dc8460962e33791c3ad6e04e507440772d7cdd9f4bcc_640.jpg');
  });

});