const user = require('../models/user-model');

const login = async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const result = await user.find({ username: username, password: password });

        if (result.length) {
            res.status(200).send();

        } else {
            res.status(404).send();
        }

    } catch {
        res.status(500).send();
    }
}

module.exports = {
    login,
}