const bodyParser = require('body-parser');
const pessoas = require('./pessoas.routes');
const niveis = require('./niveis.routes');
const turmas = require('./turmas.routes');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoas);
    app.use(niveis);
    app.use(turmas);
}

