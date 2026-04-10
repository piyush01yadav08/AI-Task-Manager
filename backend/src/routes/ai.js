
const router = require('express').Router();

// Stub for AI parsing (plug OpenAI here)
router.post('/parse', async (req,res)=>{
  const {input} = req.body;
  // Example mocked response
  res.json({
    title: input,
    priority: 'medium',
    deadline: new Date()
  });
});

module.exports = router;
