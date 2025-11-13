# Real-Time Chat Application with Socket.io
Project Overview

This project is a real-time chat application built using Socket.io, React, and Express. It demonstrates bidirectional communication between clients and a server and includes features like live messaging, typing indicators, private messaging, and online presence.

# Features

## Core Features:

- Real-time messaging using Socket.io

- Username-based login (no database required)

- Online/offline user presence

- Typing indicators

- Message history API (/api/messages)

## Advanced Features:

- Private messaging between users

- Basic read receipts

- Message delivery acknowledgment

- Reconnection logic for handling disconnections

File/image upload support (optional)

Project Structure
socketio-chat/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/  # React UI components
│   │   ├── socket/      # Socket.io client setup
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/
│   ├── server.js        # Main server file
│   ├── package.json
│   └── public/          # Static files (uploads, index.html)
└── README.md
Installation and Setup
1. Server
cd server
npm install
npm run dev   # Starts server with nodemon

Server runs on http://localhost:5000 by default.

2. Client
cd client
npm install
npm run dev   # Starts Vite dev server

Client runs on http://localhost:5173 by default.

Open multiple browser tabs to simulate multiple users.

## Usage

- Open the client URL in your browser.

- Enter a username to join the chat.

- Send messages in the global chat room.

- View online users and typing indicators.

- Send private messages to individual users.

Messages are stored in-memory on the server (limited to 100 messages).

# Notes

This is a simple assignment project; no database is used.

For persistence, you can extend the server to use MongoDB.

File uploads are stored in server/public/uploads.

Reconnection is handled automatically by the client.

Technologies Used

Node.js

Express

Socket.io

React

Vite

Nodemon (development server)

Author

James Kimani — Developer