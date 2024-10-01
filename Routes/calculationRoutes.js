import { Router } from 'express';
import { add, subtract, multiply, divide, remainder } from '../Controllers/calculationController.js';

const router = Router();

// Route to add two numbers
router.post('/add/:num1/:num2', add);

// Route to subtract two numbers
router.post('/subtract/:num1/:num2', subtract);

// Route to multiply two numbers
router.post('/multiply/:num1/:num2', multiply);

// Route to divide two numbers
router.post('/divide/:num1/:num2', divide);

// Route to calculate the remainder of two numbers
router.post('/remainder/:num1/:num2', remainder) 

export default router;
