# RESTful API Starter

A clean, modular RESTful API starter template with Express.js.

## Features

- Express.js-based REST API architecture
- Modular route and controller structure
- Request validation and error handling
- Authentication middleware support
- Database integration ready
- Environment-based configuration
- API documentation with Swagger/OpenAPI
- Logging and monitoring utilities

## Structure

```
src/
├── routes/        - API route definitions
├── controllers/   - Request handlers and business logic
├── models/        - Data models and schemas
├── middleware/    - Custom middleware (auth, validation)
└── utils/         - Helper functions and utilities
```

## Installation

Install dependencies:
```bash
npm install
```

## Usage

Start the development server:
```bash
npm run dev
```

Start production server:
```bash
npm start
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/users` - List all users
- `POST /api/users` - Create new user
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Configuration

Configure environment variables in `.env`:
```
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

## Requirements

- Node.js 14.0 or higher
- Express.js
- Database (MongoDB, PostgreSQL, etc.)

## License

MIT
