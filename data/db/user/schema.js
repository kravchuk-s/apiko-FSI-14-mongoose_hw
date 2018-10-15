const { Schema } = require('mongoose');

const schema = new Schema({
    email: String,
    profile: {
        fullName: String,
        post: String,
    },
    services: Object,
});

module.exports = schema;