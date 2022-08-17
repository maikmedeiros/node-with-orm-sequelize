// Qaundo a rota escrita conforme abaixo o JavaScript por padrão já procura um arquivo chamado index. 
const database = require('../models');

//Quando declaro o método como static, não preciso instanciar o objeto para utilizar o método.

class PessoaController{
    //Metodo para pegar todas as pessoas
    static async getPeoples(req, res){
        try{
            const allPessoas = await database.Pessoas.findAll();
            return res.status(200).json(allPessoas);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }
    //Metodo para pegar uma pessoa especifica
    static async getOnePerson(req, res){
        const {id} = req.params;

        try{
            const onePessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(onePessoa);
        }catch{
            return res.status(500).json({error: error.message});
        }
    }
    //Método para criar uma nova pessoa
    static async createPerson(req, res){
        const person = req.body;
        console.log(person);
        try{
            const newPerson = await database.Pessoas.create(person);
            return res.status(201).json(newPerson);
        }catch(error){
            return res.status(500).json({error: error.message});
        }
    }
    //Método para atualizar uma pessoa
    static async updatePerson(req, res){
        const {id} = req.params;
        const person = req.body;
        try{
            const updatedPerson = await database.Pessoas.update(person, {
                where: {
                    id: Number(id)
                }
            });
            const newPerson = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(newPerson);
        }catch(error){
            return res.status(500).json({error: error.message});
        }
    }
    //Método para deletar uma pessoa
    static async deletePerson(req, res){
        const {id} = req.params;
        try{
            const deletedPerson = await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(deletedPerson);
        }catch(error){
            return res.status(500).json({error: error.message});
        }
    }

    static async getOneMatricula(req, res){
        const {idEstudante, idMatriculla} = req.params;
        try{
            const oneMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(idMatriculla),
                    estudante_id: Number(idEstudante)
                }
            });
            return res.status(200).json(oneMatricula);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async getAllMatriculas(req, res){
        const {idEstudante} = req.params;
        try{
            const allMatriculas = await database.Matriculas.findAll({
                where: {
                    estudante_id: Number(idEstudante)
                }    
            });
            return res.status(200).json(allMatriculas);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async createMatricula(req, res){
        const {idEstudante} = req.params; 
        const matricula = {...req.body, estudante_id: Number(idEstudante)};
        try{
            const newMatricula = await database.Matriculas.create(matricula);
            return res.status(201).json(newMatricula);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async updateMatricula(req, res){
        const {idEstudante, idMatriculla} = req.params;
        const matricula = {...req.body, estudante_id: Number(idEstudante)};
        try{
            //Retorna apenas 0 ou 1, por isso usamos o findOne abaixo para retornar o registro atualizado
            const updatedMatricula = await database.Matriculas.update(matricula, {
                where: {
                    id: Number(idMatriculla),
                    estudante_id: Number(idEstudante)
                }
            });
            const newMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(idMatriculla),
                    estudante_id: Number(idEstudante)
                }
            });
            return res.status(200).json(newMatricula);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async deleteMatricula(req, res){
        const {idEstudante, idMatriculla} = req.params;
        try{
            const deletedMatricula = await database.Matriculas.destroy({
                where: {
                    id: Number(idMatriculla),
                    estudante_id: Number(idEstudante)
                }
            });
            return res.status(200).json(deletedMatricula);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = PessoaController;