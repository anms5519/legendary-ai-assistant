const express = require('express');
const router = express.Router();
const assistantController = require('../controllers/assistantController');

// Route for coding assistance
router.post('/coding', assistantController.codingAssistance);

// Route for tech tips
router.get('/tech-tips', assistantController.techTips);

// Route for life advice
router.get('/life-advice', assistantController.lifeAdvice);

module.exports = router;
