const { Schema } = require('mongoose');

const schema = new Schema({
    description: String,
    title: String,
    questionId: Schema.Types.ObjectId,
    createdAt: Date,
    createdById: Schema.Types.ObjectId,
});

module.exports = schema;