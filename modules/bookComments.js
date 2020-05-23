const { mongoose } = require('mongoose');

const bodyParser = require('body-parser');


const { Favourite, User, BookComment } = require('../db/models');

exports.getComment = (req, res) => {
    BookComment.find({
        _favouriteId: req.params.id
    }).then((comment) => {
        res.send(comment);
    })
}

exports.addComment = (req, res) => {
    console.log(req.params.id);
    Favourite.findOne({

        _id: req.params.id,
        //_userId: req.user_id
    }).then((favourite) => {
        if (favourite) {

            return true;
        }

        return false;
    }).then((canAddComment) => {
        if (canAddComment) {
            let newComment = new BookComment({
                comment: req.body.comment,
                _favouriteId: req.params.id
            });
            newComment.save().then((newTaskDoc) => {
                res.send(newTaskDoc);
            })
        } else {
            res.sendStatus(404);
        }
    })
}

exports.deleteComment = (req, res) => {

    Favourite.findOne({
        _id: req.params.id,
        //_userId: req.user_id
    }).then((favourite) => {
        if (favourite) {

            return true;
        }

        return false;
    }).then((canDeleteComment) => {

        if (canDeleteComment) {
            BookComment.findOneAndRemove({
                _id: req.params.commentId,
                _favouriteId: req.params.id
            }).then((removedTaskDoc) => {
                res.send(removedTaskDoc);
            })
        } else {
            res.sendStatus(404);
        }
    });
}




