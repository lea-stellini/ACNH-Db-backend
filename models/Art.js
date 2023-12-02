const mongoose = require('mongoose');

const artSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true},
    imgUrl: { type: String , required: true, unique: true},
})

module.exports = mongoose.model('Art', artSchema);