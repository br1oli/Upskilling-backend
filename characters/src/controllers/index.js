const {catchedAsync} = require("../Utils");

module.exports = {
    getCharacters: catchedAsync(require("./getCharacters")),
    createCharacters: catchedAsync(require("./createCharacters"))
}