const planetas = require('./planets.json')

module.exports = {
    list: async () => {
        const results = await axios.get("http://database:8004/planets");
        return results.data;
    },
}