
# React Online Shop

This project is a frontend application for an online shop built using React. It includes integration for delivery using CDEK and payment processing via Tinkoff.

## Features

- **Modern Frontend**: Responsive and interactive UI components.
- **Delivery Integration**: Automated order delivery using the CDEK API.
- **Secure Payments**: Payment processing with Tinkoff, ensuring seamless and secure transactions.
- **User Authentication**: Support for user login and registration.
- **Product Browsing**: View and search for products easily.
- **Order Tracking**: Track your order's delivery status.

---

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/           # Application pages (e.g., Home, Product, Cart)
├── assets/          # Application images
├── types/           # Types and interfaces
├── store/           # Static data
├── utils/           # Helper functions and constants
└── App.js           # Main app component
Dockerfile           # Docker configuration file
docker-compose.yml   # Docker Compose configuration
deploy.sh            # Deployment script
```

---

## Installation and Setup

### Prerequisites

- **Node.js** (if not using Docker)
- **Docker** and **Docker Compose**

### Steps

#### Local Development

1. Navigate to the project directory:
   ```bash
   cd project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for test and `.env.production` for production build in the `project` directory with the following configuration:
   ```env
   NODE_ENV='development'
   REACT_APP_BACKEND=http://localhost:8000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   The React app will be available at `http://localhost:3000`.

#### Using Docker

1. Ensure Docker and Docker Compose are installed on your machine.

2. Build and run the container using the `deploy.sh` script:
   ```bash
   sh deploy.sh
   ```

   This script will:
   - Build the Docker image.
   - Start the container using `docker-compose.yml`.

3. The application will be available at `http://localhost:5123` by default.

