const rating = require('../models/rating-model');

const getRating = async(req, res) => {
    try {
        const result = await rating.aggregate([{ $match: { name: req.params.name }}, 
            { $project: { rating: { $avg: "$rating" }}}]);
        res.contentType('application/json');
        res.status(200).json(result);
    
    } catch {
        res.status(500).send();
    }
}

const addRating = async(req, res) => {
    const document = new rating({
        name:   req.body.name,
        rating: req.body.rating,
    });

    try {
        await document.save();
        res.contentType('application/json');
        res.status(200).json(document);
    
    } catch {
        res.status(500).send();
    }
}

module.exports = {
    getRating,
    addRating,
};