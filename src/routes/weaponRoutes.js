import express from 'express';
import weaponController from '../controllers/weaponController.js'; 

const router = express.Router();

router.get('/weapons', weaponController.getAllWeapons);  

export default router;
