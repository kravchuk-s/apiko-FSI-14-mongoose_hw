const { Schema } = require('mongoose');

const schema = new Schema({
    title: String,
    description: String,
    tags: [String],
    createdAt: Date,
    createdById: Schema.Types.ObjectId,
});

module.exports = schema;