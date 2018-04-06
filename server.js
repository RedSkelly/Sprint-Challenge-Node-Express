const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');

// custom middleware

// middleware
server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(CUSTOM_MIDDLEWARE)

server.get('/', (req, res) => {
  res.json({ api: 'Running...' });
});

const port = 5000;
server.listen(port, () => console.log('API Running on port 5000'));
