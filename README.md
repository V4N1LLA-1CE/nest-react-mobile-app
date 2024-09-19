# React Native + NestJS Experiment

This repository is an experimental project to explore the integration of **React Native** (for mobile app development) with **NestJS** (for backend API development). The goal of this experiment is to prepare for an upcoming hackathon by getting hands-on experience with both technologies.

## Project Structure

- **React Native**: Frontend mobile application.
- **NestJS**: Backend API for handling data and business logic.

## Getting Started

### Prerequisites

- **Node.js** (v16 or later)
- **npx** + **npm** (for package management)
- **NestJS CLI** (for backend development)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/v4n1lla-1ce/nest-react-native-experiment.git
   cd nest-react-native-experiment
   ```

2. **Install dependencies for both projects**:

   - For the backend (NestJS):

     ```bash
     cd backend
     npm install
     ```

   - For the frontend (React Native):
     ```bash
     cd ../frontend
     npm install
     ```

### Running the Backend (NestJS)

1. **Navigate to the backend folder**:

   ```bash
   cd backend
   ```

2. **Start the NestJS server**:

   ```bash
   npm run start:dev
   ```

3. The server will start on `http://localhost:3000`.

### Running the Frontend (React Native)

1. **Navigate to the frontend folder**:

   ```bash
   cd frontend
   ```

2. **Start the React Native app** (using Expo for simplicity):

   ```bash
   npx expo start
   ```

3. Follow the instructions to run the app on a simulator or a real device (Expo Go App)

## Useful Documentation

- `https://docs.expo.dev/get-started/create-a-project/`

## License

This project is for experimentation and is not intended for production use.
