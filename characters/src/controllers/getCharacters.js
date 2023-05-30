const Character = require("../data");
const {response} = require("../Utils")

module.exports = async (req, res) => {
    const characters = await Character.list();
    response(res, 200, characters)

    // res.status(200).json(characters); (forma sin usar helper)
}