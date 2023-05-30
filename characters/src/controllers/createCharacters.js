const character = require("../data")
const {response} = require("../Utils")

module.exports = async (req, res) => {
    const newCharacter = await character.create();
    response(res, 201, newCharacter)

    res.status(200).send("creando personaje")
}