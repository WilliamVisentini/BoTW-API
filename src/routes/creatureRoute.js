import express from 'express';
import creatureController from '../controllers/creatureController.js'

const router = express.Router();

router.get('/creatures', creatureController.getAllCreatures);

export default router;  