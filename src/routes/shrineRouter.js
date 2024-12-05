import express from 'express';
import shrineController from '../controllers/shrineController.js';

const router = express.Router();

router.get('/shrines', shrineController.getAllShrines);

export default router;  
