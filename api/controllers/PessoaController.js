// Qaundo a rota escrita conforme abaixo o JavaScript por padrão já procura um arquivo chamado index. 
const database = require('../models');

//Quando declaro o método como static, não preciso instanciar o objeto para utilizar o método.

class PessoaController{
    static async getPessoas(req, res){
        try{
            const allPessoas = await database.Pessoas.findAll();
            return res.status(200).json(allPessoas);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = PessoaController;