import master_monsterController from '../controllers/masterModeController.js';
import express from 'express';

const router = express.Router();

router.get('/master-monsters', master_monsterController.getAllMasterMonsters);

export default router;
