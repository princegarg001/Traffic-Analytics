const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const http = require('http');
const { Server } = require('socket.io');
const rateLimiter = require('./middlewares/rateLimiter');
const authenticate = require('./middlewares/authenticate');
const identifyVisitor = require('./middlewares/identifyVisitor');
const hitRoutes = require('./routes/hitRoutes');
const statsRoutes = require('./routes/statsRoutes');
const registerSocketHandlers = require('./services/socketService');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

registerSocketHandlers(io);

app.use(express.json());
app.use(morgan('dev'));
app.use(rateLimiter);

app.use('/api/hit', identifyVisitor, hitRoutes(io));
app.use('/api/stats', authenticate, statsRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => server.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));