const Services = require('./Services');
const database = require('../models');

class PessoasServices extends Services {
  constructor() {
    super('Pessoas');
  }
  //Métodos específicos para Pessoas
  async getAllRecordsActives(where = {}) {
    return database[this.modelName].findAll({ where });
  }
}

module.exports = PessoasServices;