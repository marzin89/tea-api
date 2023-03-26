const tea = require('../models/tea-model');

const getTeas = async(req, res) => {
    try {
        const teas = await tea.find();

        if (teas.length) {
            res.contentType('application/json');
            res.status(200).json(teas);

        } else {
            res.status(404).send();
        }

    } catch {
        res.status(500).send();
    }
}

const getTeasByName = async(req, res) => {
    try {
        const teas = await tea.find({ name: req.params.name });
        
        if (teas.length) {
            res.contentType('application/json');
            res.status(200).json(teas);
        
        } else {
            res.status(500).json();
        }
    
    } catch {
        res.status(500).send();
    }
}

const getTeasByType = async(req, res) => {
    try {
        const teas = await tea.find({ type: req.params.type });
        
        if (teas.length) {
            res.contentType('application/json');
            res.status(200).json(teas);
        
        } else {
            res.status(404).send();
        }
    
    } catch {
        res.status(500).send();
    }
}

const getTeasByOrigin = async(req, res) => {
    try {
        const teas = await tea.find({ origin: req.params.origin });
        
        if (teas.length) {
            res.contentType('application/json');
            res.status(200).json(teas);
        
        } else {
            res.status(404).send();
        }
    
    } catch {
        res.status(500).send(); 
    }
}

const getTea = async(req, res) => {
    try {
        const document = await tea.find({ _id: req.params.id });

        if (document.length) {
            res.contentType('application/json');
            res.status(200).json(document);
        
        } else {
            res.status(404).send(); 
        }
    
    } catch {
        res.status(500).send();
    }
}

const getTeasFilterParams = async(req, res) => {
    const name         = req.params.name;
    const type         = req.params.type;
    const origin       = req.params.origin;
    const filterParams = {};

    if (name != '' && name != 'name') {
        filterParams.name = name;
    }

    if (type != '' && type != 'type') {
        filterParams.type = type;
    }

    if (origin != '' && origin != 'origin') {
        filterParams.origin = origin;
    }

    try {
        const teas = await tea.find(filterParams);
        res.contentType('application/json');

        if (teas.length) {
            res.status(200).json(teas);
        
        } else {
            res.status(404).json(filterParams);
        }
    
    } catch {
        res.status(500).send();
    }
}

const addTea = async(req, res) => {
    const document = new tea({
        name:        req.body.name,
        type:        req.body.type,
        origin:      req.body.origin,
        price:       req.body.price,
        description: req.body.description,
    });

    try {
        await document.save();
        res.contentType('application/json');
        res.status(201).json(document);
    
    } catch {
        res.status(500).json();
    }
}

const updateTea = async(req, res) => {
    try {
        const document = await tea.findOneAndUpdate(
            { _id: req.params.id }, 
            {  
                name:        req.body.name, 
                type:        req.body.type,
                origin:      req.body.origin,
                price:       req.body.price,
                description: req.body.description,

            }, { returnDocument: true }
        );

        res.status(200).json(document);
    
    } catch {
        res.status(500).send();
    }
}

const deleteTea = async(req, res) => {
    try {
        await tea.findOneAndDelete({ _id: req.params.id });
        res.status(204).send();
    
    } catch {
        res.status(500).send();
    }
}

module.exports = {
    getTeas,
    getTeasByName,
    getTeasByType,
    getTeasByOrigin,
    getTea,
    getTeasFilterParams,
    addTea,
    updateTea,
    deleteTea,
}