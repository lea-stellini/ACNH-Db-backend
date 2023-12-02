const Art = require('../models/Art');

exports.addInMuseum = (req, res, next) => {
    const artObject = req.body;

    const art = new Art({
        ...artObject,
    })

    art.save()
    .then(() => res.status(201).json({message: 'Oeuvre ajouté au musée !'}))
    .catch(error => res.status(400).json({ error }))
}

exports.getMuseum = (req, res, next) => {
    Art.find()
    .then((arts) => {res.status(200).json(arts)})
    .catch((error) => {res.status(400).json({error})});
}