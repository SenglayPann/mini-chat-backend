const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');
const chatRoomRoutes = require('./routes/chatRoomRoutes');

// Basic Express.js app with security best practices
const app = express();

// Set security HTTP headers
app.use(helmet());

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

// Message routes
app.use('/api/v1/messages', messageRoutes);
// Chat room routes
app.use('/api/v1/chatrooms', chatRoomRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to mini-chat!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`mini-chat server running on port ${PORT}`);
});
