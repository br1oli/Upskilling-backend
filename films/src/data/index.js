const films  = require("./films.json")

module.exports = {
    list: async () => {
        const results = await axios.get("http://database:8004/films");
        return results.data;
    },
}