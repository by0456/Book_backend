const { mongoose } = require('mongoose');

const bodyParser = require('body-parser');

const { Favourite, User } = require('../db/models');

exports.getFavourite = (req, res) => {
    Favourite.find({
        //_userId: req.user_id
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
}

exports.getFavouriteDetails = (req, res) => {
    Favourite.find({
        _id: req.params.id
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
}

exports.addFavourite = (req, res) => {
    
    let bid = req.body.bid;
    let title = req.body.title;
    let authors = req.body.authors;
    let description = req.body.description;


    

    let newFavourite = new Favourite({
        bid,
        title,
        authors,
        description,
    });
    newFavourite.save().then((listDoc) => {
        res.send(listDoc);
    })
}

exports.deleteFavourite = (req, res) => {
    
    Favourite.findOneAndRemove({
        _id: req.params.id,
    }).then((removedListDoc) => {
        res.send(removedListDoc);
    })
}
