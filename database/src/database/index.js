const mongoose = require("mongoose");
const { MONGO_URL } = require("../config/envs")

const conn = mongoose.createConnection(MONGO_URL);

// const Character = conn.model("Character", require("./schemas/characterSchema"));
// const Film = conn.model("Film", require("./schemas/filmSchema"));

// Character.find()
// .then((res) => console.log(res));

// Character.find()
// .populate("films", ["_id", "title"])
// .then((res) => console.log(res[0]));

module.exports = {
    Character: conn.model("Character", require("./schemas/characterSchema")),
    Film: conn.model("Film", require("./schemas/filmSchema")),
    Planet: conn.model("Planet", require("./schemas/planetSchema")),
}