#!/bin/bash

echo "Starting Medrx+ Pharmacy Platform..."
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed or not in PATH"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "ERROR: npm is not installed or not in PATH"
    echo "Please install npm with Node.js"
    exit 1
fi

# Function to check if MongoDB is running
check_mongodb() {
    if command -v mongosh &> /dev/null; then
        mongosh --quiet --eval "db.adminCommand('ismaster')" > /dev/null 2>&1
        return $?
    elif command -v mongo &> /dev/null; then
        mongo --quiet --eval "db.adminCommand('ismaster')" > /dev/null 2>&1
        return $?
    else
        echo "WARNING: MongoDB client not found. Assuming MongoDB is running..."
        return 0
    fi
}

# Check MongoDB connection
echo "Checking MongoDB connection..."
if check_mongodb; then
    echo "✓ MongoDB is running"
else
    echo "WARNING: MongoDB connection failed. Please ensure MongoDB is running on localhost:27017"
fi
echo

# Function to kill processes on specific ports (cleanup)
cleanup() {
    echo "Stopping servers..."
    pkill -f "node.*3000" 2>/dev/null || true
    pkill -f "node.*5000" 2>/dev/null || true
    pkill -f "next.*dev" 2>/dev/null || true
    pkill -f "nodemon" 2>/dev/null || true
    echo "Cleanup complete"
    exit 0
}

# Set trap for cleanup on script exit
trap cleanup SIGINT SIGTERM

# Start backend server in background
echo "Starting backend server on port 5000..."
cd backend
npm run dev &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 3

# Start frontend server in background
echo "Starting frontend server on port 3000..."
npm run dev &
FRONTEND_PID=$!

# Wait a moment for frontend to start
sleep 5

echo
echo "========================================"
echo "🚀 Medrx+ Platform is running!"
echo "========================================"
echo
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend:  http://localhost:5000/api"
echo
echo "Press Ctrl+C to stop all servers"
echo

# Wait for any of the processes to finish
wait