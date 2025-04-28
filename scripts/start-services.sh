#!/bin/bash

# Script to start both Core Verify and NurseIO Web services for integration testing

# Determine script directory
SCRIPT_DIR=$(dirname "$0")
ROOT_DIR=$(dirname "$SCRIPT_DIR")
PARENT_DIR=$(dirname "$ROOT_DIR")
NURSEIO_DIR="$PARENT_DIR/nurseio-web"

# Set terminal colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Core Verify & NurseIO Integration Starter ===${NC}"
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Check if Core Verify directory exists
if [ ! -d "$ROOT_DIR" ]; then
    echo -e "${RED}Core Verify directory not found at: $ROOT_DIR${NC}"
    exit 1
fi

# Check if NurseIO Web directory exists
if [ ! -d "$NURSEIO_DIR" ]; then
    echo -e "${YELLOW}Warning: NurseIO Web directory not found at: $NURSEIO_DIR${NC}"
    echo -e "${YELLOW}Will only start Core Verify service.${NC}"
    START_NURSEIO=false
else
    START_NURSEIO=true
fi

# Define log files
COREVERIFY_LOG="/tmp/coreverify.log"
NURSEIO_LOG="/tmp/nurseio.log"

# Function to start Core Verify
start_core_verify() {
    echo -e "${GREEN}Starting Core Verify on port 3001...${NC}"
    echo -e "${YELLOW}Log file: $COREVERIFY_LOG${NC}"
    cd "$ROOT_DIR" && npm run dev > "$COREVERIFY_LOG" 2>&1 &
    COREVERIFY_PID=$!
    echo -e "${GREEN}Core Verify started with PID: $COREVERIFY_PID${NC}"
}

# Function to start NurseIO Web
start_nurseio() {
    echo -e "${GREEN}Starting NurseIO Web on port 3000...${NC}"
    echo -e "${YELLOW}Log file: $NURSEIO_LOG${NC}"
    cd "$NURSEIO_DIR" && npm run dev > "$NURSEIO_LOG" 2>&1 &
    NURSEIO_PID=$!
    echo -e "${GREEN}NurseIO Web started with PID: $NURSEIO_PID${NC}"
}

# Start services
start_core_verify

if [ "$START_NURSEIO" = true ]; then
    start_nurseio
fi

echo
echo -e "${GREEN}Services started successfully!${NC}"
echo -e "${BLUE}Core Verify URL: http://localhost:3001${NC}"

if [ "$START_NURSEIO" = true ]; then
    echo -e "${BLUE}NurseIO Web URL: http://localhost:3000${NC}"
    echo -e "${BLUE}NurseIO Dashboard: http://localhost:3000/admin/dashboard${NC}"
fi

echo
echo -e "${YELLOW}Press Ctrl+C to stop all services${NC}"

# Handle Ctrl+C
trap_ctrlc() {
    echo
    echo -e "${RED}Stopping services...${NC}"
    kill $COREVERIFY_PID 2>/dev/null
    if [ "$START_NURSEIO" = true ]; then
        kill $NURSEIO_PID 2>/dev/null
    fi
    exit 0
}

trap trap_ctrlc INT

# Keep script running
while true; do
    sleep 1
done 