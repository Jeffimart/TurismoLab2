const app = require('./app');
const { mongoose } = require('./database');

async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port 4000');
}

main();
