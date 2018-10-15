const { Schema } = require('mongoose');

const schema = new Schema({
    isPostitive: Boolean,
    createdAt: Date,
    answerId: Schema.Types.ObjectId,
    createdById: Schema.Types.ObjectId,
});

module.exports = schema;