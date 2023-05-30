const  app = require('./app')

async function main () {
    await app.listen(8001);
    console.log('server is running on port 8001')
}
main();

// app.listen(3000, () => console.log('Server on port 3000'))