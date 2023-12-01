const mongoose = require('mongoose');

const artSchema = mongoose.Schema({
    name: { type: String, required: true},
    inMuseum: { type: Boolean, required: true},
    hasFalse: { type: Boolean, required: true},
})

module.exports = mongoose.model('Art', artSchema);