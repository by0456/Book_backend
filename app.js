const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');
const googleapi = require('./modules/booksqueryHandler')

const PORT = process.env.PORT || 3050;
const { Favourite, User, BookComment, BookScore } = require('./db/models');

const favourite = require('./modules/favourites');
const bookComment = require('./modules/bookComments');
const bookScore = require('./modules/bookScore');
//const users = require('./modules/users');

const Authenticate = require('./modules/authenticate');
const VerifySession = require('./modules/verifySession');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();

});


Authenticate.authenticate;
VerifySession.verifySession;

app.get('/', (req, res) => {
    res.send('welcome to my API');
});

app.get('/booksearch', googleapi.doBookSearch);
app.get('/favourite', favourite.getFavourite);
app.get('/favourite/:id', favourite.getFavouriteDetails);
app.post('/favourite', favourite.addFavourite);
app.delete('/favourite/:id', favourite.deleteFavourite);

app.get('/favourite/:id/comment', bookComment.getComment);
app.post('/favourite/:id/comment', bookComment.addComment);
app.delete('/favourite/:id/comment/:commentId', bookComment.deleteComment);
app.put('/favourite/:id/comment/:commentId', bookComment.editComment);

app.get('/favourite/:id/bookScore', bookScore.getScore);
app.post('/favourite/:id/bookScore', bookScore.addScore);
app.delete('/favourite/:id/bookScore/:bookScoreId', bookScore.deleteScore);
app.put('/favourite/:id/bookScore/:bookScoreId', bookScore.editScore);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));