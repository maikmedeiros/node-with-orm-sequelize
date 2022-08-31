const database = require('../models');

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }
}

module.exports = Services;