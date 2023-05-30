const film = require("../data")

module.exports = async (req, res) => {
    const filmes = await film.list();
    res.status(200).json(filmes);
}