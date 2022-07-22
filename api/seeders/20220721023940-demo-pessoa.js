'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    //Add seed commands here.
    //Mesmo nome da tabela no banco de dados "Pessoas";
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Maik Medeiros',
        ativo: true,
        email: 'maijkmedeirosm@outlook.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ivanildo',
        ativo: true,
        email: 'maijkmedeirosm@outlook.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Berlinda',
        ativo: true,
        email: 'maijkmedeirosm@outlook.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Valéria',
        ativo: true,
        email: 'maijkmedeirosm@outlook.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    //Add commands to revert seed here.
    //Mesmo nome da tabela no banco de dados "Pessoas";
    await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
