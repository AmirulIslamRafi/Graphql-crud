const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const clientShema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
});
module.exports = model('Clint', clientShema);