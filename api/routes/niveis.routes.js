const { Router } = require('express');
const NiveisController = require('../controllers/NiveisController');

const router = Router();

router.get('/niveis', NiveisController.getNiveis);
router.get('/niveis/:id', NiveisController.getOneNivel);
router.post('/niveis', NiveisController.createNivel);
router.put('/niveis/:id', NiveisController.updateNivel);
router.delete('/niveis/:id', NiveisController.deleteNivel);


module.exports = router;