const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

//Como declarei o método como static, não preciso instanciar o objeto para utilizar o método. -- new PessoaController()

router.get('/', PessoaController.getPessoas);

module.exports = router;
