const bodyParser = require('body-parser');
const pessoas = require('./pessoas.routes');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoas);
}

