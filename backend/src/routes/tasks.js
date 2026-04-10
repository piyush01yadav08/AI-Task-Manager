
const router = require('express').Router();
const Task = require('../models/Task');
const auth = require('../middleware/auth');

router.get('/', auth, async (req,res)=>{
  const tasks = await Task.find({user:req.user});
  res.json(tasks);
});

router.post('/', auth, async (req,res)=>{
  const task = await Task.create({...req.body, user:req.user});
  res.json(task);
});

router.put('/:id', auth, async (req,res)=>{
  const t = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(t);
});

router.delete('/:id', auth, async (req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({msg:'deleted'});
});

module.exports = router;
