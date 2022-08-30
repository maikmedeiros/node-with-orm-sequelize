const { Router } = require("express");
const TurmasController = require("../controllers/TurmasController");

const router = Router();

router.get("/turmas", TurmasController.getTurmas);
router.get("/turmas/:id", TurmasController.getOneTurma);
router.post("/turmas", TurmasController.createTurma);
router.put("/turmas/:id", TurmasController.updateTurma);
router.delete("/turmas/:id", TurmasController.deleteTurma);

module.exports = router;
