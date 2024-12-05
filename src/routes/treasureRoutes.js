import express, { Router } from 'express';
import treasureController from '../controllers/treasuresController.js';

const router = express.Router();

router.get('/treasures', treasureController.getAllTreasures)

export default router;