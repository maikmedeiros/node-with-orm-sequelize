const database = require('../models');

class NiveisController{
    static async getNiveis(req, res){
        try{
            const allNiveis = await database.Niveis.findAll();
            return res.status(200).json(allNiveis);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async getOneNivel(req, res){
        const {id} = req.params;
        try{
            const oneNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(oneNivel);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async createNivel(req, res){
        const nivel = req.body;
        try{
            const newNivel = await database.Niveis.create(nivel);
            return res.status(201).json(newNivel);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async updateNivel(req, res){
        const {id} = req.params;
        const nivel = req.body;
        try{
            const updatedNivel = await database.Niveis.update(nivel, {
                where: {
                    id: Number(id)
                }
            });
            const newNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(newNivel);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    static async deleteNivel(req, res){
        const {id} = req.params;
        try{
            const deletedNivel = await database.Niveis.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(deletedNivel);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = NiveisController;