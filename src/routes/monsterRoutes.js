import express from 'express';
import monsterController from '../controllers/monsterController.js';

const router = express.Router();

router.get('/monsters', monsterController.getAllMonsters);

export default router;  
