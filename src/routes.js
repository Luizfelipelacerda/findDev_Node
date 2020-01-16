const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();
// Metodos HTTP: Get, Post, Put, Delete
// Tipos de parametros
// Query Params: request.query (Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)
routes.post('/devs', async (request, response) =>{
    const {github_username, techs, latitude, longitude} = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    // resposta
    const {name = login, avatar_url, bio} = apiResponse.data;
    console.log(bio);
    // const techsArray = techs.split(',').map(tech => tech.trim());
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    }
    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: ['techsArray','kokok'],
        location
    });
    return response.json(dev);
}); 
module.exports = routes;