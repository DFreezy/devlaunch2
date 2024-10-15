# DevLaunch - Bootcamp Aggregator

**DevLaunch** is a bootcamp aggregator website that helps aspiring developers discover, compare, and review coding bootcamps. Users can browse bootcamps by location, specialization, and rating, as well as submit reviews based on their experiences.

## Features
- Search and filter bootcamps by location, technologies, or cost.
- View detailed information about each bootcamp, including reviews and ratings.
- Users can submit reviews and ratings based on their personal experiences.
- Mobile-friendly, responsive design for ease of use on any device.

## Table of Contents
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Built With](#built-with)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with **DevLaunch**, you'll need to clone the repository and set up both the frontend (React app) and the backend (Node.js API).

### Prerequisites
Ensure you have the following installed:
- **Node.js** (version 14.x or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git**

## Folder Structure

```
project-root/
├── client/                # React app (Frontend)
│   ├── public/            # Public assets (HTML, images, etc.)
│   ├── src/               # React components, JavaScript, etc.
│   ├── package.json       # React app dependencies
│   └── node_modules/      # React app dependencies (not included in version control)
├── server/                # Node.js backend (API)
│   ├── index.js           # Main server file (Express setup)
│   ├── routes/            # API routes
│   ├── controllers/       # Controller logic for handling API requests
│   ├── models/            # Database models (if applicable)
│   ├── package.json       # Backend dependencies
│   └── node_modules/      # Backend dependencies (not included in version control)
├── .gitignore             # Ignore files for version control
└── README.md              # Project documentation
```

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/devlaunch.git
cd devlaunch
```

### 2. Install Dependencies
#### Frontend (React App)
```bash
cd client
npm install
```

#### Backend (Node.js API)
```bash
cd ../server
npm install
```

## Running the Application

### Running the Client (React App)
```bash
cd client
npm start
```
This will start the React development server at `http://localhost:3000`.

### Running the Server (Node.js API)
```bash
cd server
node index.js
```
The server will start at `http://localhost:5000`.

### Running Both Client and Server Concurrently
To run both the client and server simultaneously, install `concurrently` if it's not installed:
```bash
npm install concurrently --save-dev
```

Then, add the following script to the root `package.json`:
```json
{
  "scripts": {
    "start-client": "cd client && npm start",
    "start-server": "cd server && node index.js",
    "dev": "concurrently \"npm run start-client\" \"npm run start-server\""
  }
}
```

Now you can run both with:
```bash
npm run dev
```

## API Routes

| Route             | Method | Description                           |
|-------------------|--------|---------------------------------------|
| `/api/bootcamps`  | GET    | Get all bootcamps                     |
| `/api/bootcamps/:id` | GET | Get details of a single bootcamp       |
| `/api/reviews`    | POST   | Submit a review for a bootcamp         |
| `/api/reviews/:id`| GET    | Get reviews for a specific bootcamp    |

> Note: Additional API routes can be added as needed for features like filtering, searching, etc.

## Built With

- **React** - Frontend JavaScript library
- **Node.js** - Backend JavaScript runtime
- **Express** - Web framework for Node.js
- **MongoDB** (optional) - For storing bootcamp and user data (or any other database)
- **Axios** - For making API requests from the React app
- **Concurrently** - For running client and server simultaneously during development

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Open a pull request.

Please ensure your code follows the project's coding style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.