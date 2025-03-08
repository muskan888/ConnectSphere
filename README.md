# 🌐 ConnectSphere

A modern video conferencing platform with integrated collaboration tools, inspired by Microsoft Teams.

## 🚀 Overview

ConnectSphere is a comprehensive communication platform that enables real-time video conferencing, screen sharing, whiteboard collaboration, and persistent chat functionality. Built with modern web technologies, it provides a seamless experience for remote collaboration.

## ✨ Key Features

- **📹 Video Conferencing**: Connect with multiple participants in high-quality video calls
- **🖥️ Screen Sharing**: Present your screen to other participants during meetings
- **🖌️ Interactive Whiteboard**: Collaborate visually with an integrated drawing board
- **💬 Persistent Chat**: Send and receive messages before, during, and after meetings
- **🔐 Secure Communication**: End-to-end encrypted video calls and messages

## 🛠️ Technology Stack

- **Frontend**: React.js with modern JavaScript
- **Backend**: Node.js with Express
- **Real-time Communication**: WebRTC, Socket.io
- **Styling**: CSS/SCSS with responsive design

## 📋 Development Process

ConnectSphere was developed using Agile methodology, specifically Scrum:

### Product Backlog

1. **Front-End Development**: Designed and implemented a user-friendly interface with a unique approach compared to Microsoft Teams
2. **Video Calling Implementation**: Built core functionality for connecting at least two participants in a video call
3. **Screen Sharing & Whiteboard**: Developed essential collaboration features for effective meetings
4. **Chat Functionality**: Initially implemented for in-meeting use, later expanded to persistent chat that continues before/after meetings

### Agile Process

- **Sprint Backlog**: Features were prioritized and organized into development sprints
- **Daily Scrum**: Regular meetings with mentors to review progress and address challenges
- **Sprint Review and Increment**: Continuous deployment after the completion of each feature

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- Modern web browser (Chrome, Firefox, Edge recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muskan888/connectsphere.git
   cd connectsphere
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file based on the provided `.env.example`
   - Configure necessary API keys and service endpoints

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:4000`

## 📋 Project Structure

```
connectsphere/
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Application pages
│   ├── services/         # API and service integrations
│   ├── utils/            # Utility functions
│   └── styles/           # CSS/SCSS stylesheets
├── public/               # Static assets
├── server.js             # Express server configuration
├── .env                  # Environment variables
└── package.json          # Project dependencies
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- WebRTC for enabling real-time communication
- Socket.io for reliable websocket connections
- The open source community for various tools and libraries
