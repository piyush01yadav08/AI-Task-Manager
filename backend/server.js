
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./src/routes/auth');
const taskRoutes = require('./src/routes/tasks');
const aiRoutes = require('./src/routes/ai');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log('Mongo connected'))
  .catch(e=>console.log(e));

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req,res)=>res.send('API running'));

app.listen(process.env.PORT || 5000, ()=>console.log('Server started'));
