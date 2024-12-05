import express from 'express';
import foodController from '../controllers/foodController.js'

const router = express.Router();

router.get('/foods', foodController.getAllFood);

export default router;