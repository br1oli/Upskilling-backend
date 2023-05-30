const planets = require('../data')

module.exports = async (req, res) => {
    const planetas = await planets.list();
    res.status(200).json(planetas);
}