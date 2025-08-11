require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');
const chatRoomRoutes = require('./routes/chatRoomRoutes');
const authRoutes = require('./routes/authRoutes');
const path = require('path');
// Basic Express.js app with security best practices
const app = express();
const errorHandler = require('./controllers/errorController')

// public
app.use(express.static(path.join(__dirname, 'public')));


// Enable CORS
app.use(cors());

// Limit repeated requests to public APIs
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Body parser
app.use(express.json({ limit: '10kb' }));

// You can add SQL injection and XSS protection middleware here if needed for PostgreSQL
// e.g., use express-validator for input validation/sanitization
const baseApi = process.env.BASE_API_URL;

// Auth routes
app.use('/auth', authRoutes);
// Message routes
app.use(`${baseApi}/messages`, messageRoutes);
// Chat room routes
app.use(`${baseApi}chatrooms`, chatRoomRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to mini-chat!');
});

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`mini-chat server running on port ${PORT}`);
});
