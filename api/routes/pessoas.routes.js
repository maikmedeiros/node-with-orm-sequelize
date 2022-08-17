const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

//Como declarei o método como static, não preciso instanciar o objeto para utilizar o método. -- new PessoaController()

router.get('/pessoas', PessoaController.getPeoples);
router.get('/pessoas/:id', PessoaController.getOnePerson);
router.post('/pessoas', PessoaController.createPerson);
router.put('/pessoas/:id', PessoaController.updatePerson);
router.delete('/pessoas/:id', PessoaController.deletePerson);

router.get('/pessoas/:idEstudante/matriculas', PessoaController.getAllMatriculas);
router.get('/pessoas/:idEstudante/matriculas/:idMatriculla', PessoaController.getOneMatricula);
router.post('/pessoas/:idEstudante/matriculas', PessoaController.createMatricula);
router.put('/pessoas/:idEstudante/matriculas/:idMatricula', PessoaController.updateMatricula);
router.delete('/pessoas/:idEstudante/matriculas/:idMatricula', PessoaController.deleteMatricula);

module.exports = router;
