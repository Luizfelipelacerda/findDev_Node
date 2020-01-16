const mongoose = require('mongoose');
const PointSchema = require('./util/PointSchema');
const DevSchema = new mongoose.Schema({
    nome: String,
    github_user: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
    }
});


module.exports = mongoose.model('Dev', DevSchema);