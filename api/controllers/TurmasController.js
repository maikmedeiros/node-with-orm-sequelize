const database = require('../models');

class TurmasController{

    static async getTurmas(req, res){
        try{
            const allTurmas = await database.Turmas.findAll();
            return res.status(200).json(allTurmas);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async getOneTurma(req, res){
        const {id} = req.params;
        try{
            const oneTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(oneTurma);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async createTurma(req, res){
        const turma = req.body;
        try{
            const newTurma = await database.Turmas.create(turma);
            return res.status(201).json(newTurma);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async updateTurma(req, res){
        const {id} = req.params;
        const turma = req.body;
        try{
            const updatedTurma = await database.Turmas.update(turma, {
                where: {
                    id: Number(id)
                }
            });
            const newTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(newTurma);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async deleteTurma(req, res){
        const {id} = req.params;
        try{
            const deletedTurma = await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(deletedTurma);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

}

module.exports = TurmasController;