const port = 8080;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requere = require('require-dir');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://kauton:cajlon4321@spacenews.uyvba.mongodb.net/yourevents?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true  });
requere('./src/models');

app.get('/', (req, res) => {
  return res.status(200).json({
    title: 'Your Event API',
    author: 'Francisco Cajlon'
  });
})
app.use('/api', require('./src/routes/routes'));

app.listen(process.env.PORT || port, console.log(`API rodando na porta ${port}`));