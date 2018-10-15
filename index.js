const mongoose = require('mongoose');
const moment = require('moment');
const { User } = require('./data/db/user');
const { Question } = require('./data/db/question');
const { Answer } = require('./data/db/answer');
const { Vote } = require('./data/db/vote');

mongoose.connect('mongodb://localhost:27017/mongoose-fsi')
    .then(() => console.log('Connected'))
    .catch(error => console.error(`An erro ocurred: ${error}`));

const runQuery = async () => {
    try {
        const user = {
            email: 'wok@wok.wok',
            profile: {
                fullName: 'Full Name',
                post: 'Description Post',
            },
        };
        const newUser = await User.create(user);
        console.log(newUser);

        const question = {
            title: 'Some question title',
            description: 'Some question description',
            tags: ['Tag', 'AnotherTag'],
            createdAt: moment(),
            createdById: newUser._id,
        }
        const newQuestion = await Question.create(question);
        console.log(newQuestion);

        const answer = {
            description: 'Answer Text',
            title: 'Answer Title',
            questionId: newQuestion._id,
            createdAt: moment(),
            createdById: newUser._id,
        };
        const newAnswer = await Answer.create(answer);
        console.log(newAnswer);
        
        const vote = {
            isPostitive: true,
            createdAt: moment(),
            answerId: newAnswer._id,
            createdById: newUser._id,
        }
        const newVote = await Vote.create(vote);
        console.log(newVote);

    } catch (error) {
        console.error(error);
    }
}

runQuery();