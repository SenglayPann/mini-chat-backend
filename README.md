# mini-chat

A basic Express.js chat app with security best practices enabled.

## Features
- Express.js server
- Security headers via Helmet
- Rate limiting
- Input sanitization (NoSQL injection, XSS)
- CORS enabled
- Simple in-memory chat API

## Usage

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   npm start
   ```
3. Endpoints:
   - `GET /api/messages` — Get all chat messages
   - `POST /api/messages` — Post a new message (`{ user, text }`)

## Security
- Helmet for HTTP headers
- express-rate-limit for brute-force protection
- express-mongo-sanitize and xss-clean for input sanitization
- CORS enabled

---

This is a demo app. For production, use a persistent database and HTTPS.
