# API Documentation

## Overview

This document provides comprehensive documentation for all API endpoints in the project.

## Base URL

```
https://api.yourproject.com/v1
```

## Authentication

Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Response Format

All API responses follow a consistent format:

### Success Response
```json
{
  "data": {
    // Response data
  },
  "meta": {
    "timestamp": "2024-01-01T12:00:00Z",
    "requestId": "unique-request-id",
    "version": "1.0.0"
  }
}
```

### Error Response
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {
      // Additional error details
    }
  },
  "meta": {
    "timestamp": "2024-01-01T12:00:00Z",
    "requestId": "unique-request-id",
    "version": "1.0.0"
  }
}
```

## Endpoints

### Health Check

#### GET /healthz
Check the health status of the service.

**Response:**
```json
{
  "data": {
    "status": "healthy",
    "version": "1.0.0",
    "uptime": "24h 30m 45s",
    "database": "connected",
    "cache": "connected"
  }
}
```

**Status Codes:**
- `200` - Service is healthy
- `503` - Service is unhealthy

---

### Authentication

#### POST /auth/login
Authenticate a user and receive a JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "userpassword"
}
```

**Response:**
```json
{
  "data": {
    "user": {
      "id": "user-id",
      "email": "user@example.com",
      "name": "User Name",
      "role": "user"
    },
    "token": "jwt-token-here",
    "expiresIn": 3600
  }
}
```

**Status Codes:**
- `200` - Login successful
- `401` - Invalid credentials
- `400` - Invalid request data

#### POST /auth/refresh
Refresh an existing JWT token.

**Request Body:**
```json
{
  "token": "current-jwt-token"
}
```

**Response:**
```json
{
  "data": {
    "token": "new-jwt-token",
    "expiresIn": 3600
  }
}
```

**Status Codes:**
- `200` - Token refreshed successfully
- `401` - Invalid or expired token

#### POST /auth/logout
Invalidate the current user's session.

**Response:**
```json
{
  "data": {
    "message": "Logged out successfully"
  }
}
```

**Status Codes:**
- `200` - Logout successful
- `401` - Unauthorized

---

### Users

#### GET /users
Get a list of users (admin only).

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `search` (optional): Search term for name or email

**Response:**
```json
{
  "data": {
    "users": [
      {
        "id": "user-id",
        "email": "user@example.com",
        "name": "User Name",
        "role": "user",
        "createdAt": "2024-01-01T12:00:00Z",
        "lastLogin": "2024-01-01T12:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "totalPages": 10
    }
  }
}
```

**Status Codes:**
- `200` - Users retrieved successfully
- `401` - Unauthorized
- `403` - Insufficient permissions

#### GET /users/{id}
Get a specific user by ID.

**Response:**
```json
{
  "data": {
    "user": {
      "id": "user-id",
      "email": "user@example.com",
      "name": "User Name",
      "role": "user",
      "createdAt": "2024-01-01T12:00:00Z",
      "lastLogin": "2024-01-01T12:00:00Z"
    }
  }
}
```

**Status Codes:**
- `200` - User found
- `404` - User not found
- `401` - Unauthorized

#### PUT /users/{id}
Update a user (users can only update themselves, admins can update any user).

**Request Body:**
```json
{
  "name": "New User Name",
  "email": "newemail@example.com"
}
```

**Response:**
```json
{
  "data": {
    "user": {
      "id": "user-id",
      "email": "newemail@example.com",
      "name": "New User Name",
      "role": "user",
      "updatedAt": "2024-01-01T12:00:00Z"
    }
  }
}
```

**Status Codes:**
- `200` - User updated successfully
- `400` - Invalid request data
- `401` - Unauthorized
- `403` - Insufficient permissions
- `404` - User not found

#### DELETE /users/{id}
Delete a user (admin only).

**Response:**
```json
{
  "data": {
    "message": "User deleted successfully"
  }
}
```

**Status Codes:**
- `200` - User deleted successfully
- `401` - Unauthorized
- `403` - Insufficient permissions
- `404` - User not found

---

### Items

#### GET /items
Get a list of items.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `category` (optional): Filter by category
- `search` (optional): Search term

**Response:**
```json
{
  "data": {
    "items": [
      {
        "id": "item-id",
        "name": "Item Name",
        "description": "Item description",
        "category": "category-name",
        "price": 99.99,
        "createdAt": "2024-01-01T12:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "totalPages": 5
    }
  }
}
```

**Status Codes:**
- `200` - Items retrieved successfully

#### GET /items/{id}
Get a specific item by ID.

**Response:**
```json
{
  "data": {
    "item": {
      "id": "item-id",
      "name": "Item Name",
      "description": "Item description",
      "category": "category-name",
      "price": 99.99,
      "createdAt": "2024-01-01T12:00:00Z"
    }
  }
}
```

**Status Codes:**
- `200` - Item found
- `404` - Item not found

#### POST /items
Create a new item.

**Request Body:**
```json
{
  "name": "New Item",
  "description": "Item description",
  "category": "category-name",
  "price": 99.99
}
```

**Response:**
```json
{
  "data": {
    "item": {
      "id": "new-item-id",
      "name": "New Item",
      "description": "Item description",
      "category": "category-name",
      "price": 99.99,
      "createdAt": "2024-01-01T12:00:00Z"
    }
  }
}
```

**Status Codes:**
- `201` - Item created successfully
- `400` - Invalid request data
- `401` - Unauthorized

#### PUT /items/{id}
Update an existing item.

**Request Body:**
```json
{
  "name": "Updated Item Name",
  "description": "Updated description",
  "price": 149.99
}
```

**Response:**
```json
{
  "data": {
    "item": {
      "id": "item-id",
      "name": "Updated Item Name",
      "description": "Updated description",
      "category": "category-name",
      "price": 149.99,
      "updatedAt": "2024-01-01T12:00:00Z"
    }
  }
}
```

**Status Codes:**
- `200` - Item updated successfully
- `400` - Invalid request data
- `401` - Unauthorized
- `404` - Item not found

#### DELETE /items/{id}
Delete an item.

**Response:**
```json
{
  "data": {
    "message": "Item deleted successfully"
  }
}
```

**Status Codes:**
- `200` - Item deleted successfully
- `401` - Unauthorized
- `404` - Item not found

---

## Rate Limiting

API endpoints are rate limited to prevent abuse:

- **Standard Limit**: 100 requests per minute
- **Burst Limit**: 1000 requests per hour
- **Headers**:
  - `X-RateLimit-Limit`: Maximum requests per time window
  - `X-RateLimit-Remaining`: Remaining requests in current window
  - `X-RateLimit-Reset`: Time when limit resets (Unix timestamp)

When rate limit is exceeded:
```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests"
  }
}
```

## Error Codes

| Code | Description |
|------|-------------|
| `VALIDATION_ERROR` | Invalid input data |
| `UNAUTHORIZED` | Authentication required |
| `FORBIDDEN` | Insufficient permissions |
| `NOT_FOUND` | Resource not found |
| `RATE_LIMIT_EXCEEDED` | Too many requests |
| `INTERNAL_ERROR` | Server error |

## SDKs and Libraries

### JavaScript/TypeScript
```bash
npm install your-project-sdk
```

### Python
```bash
pip install your-project-sdk
```

### Go
```bash
go get github.com/your-org/your-project-sdk
```

## Support

For API support:
- Email: api-support@yourproject.com
- Documentation: https://docs.yourproject.com/api
- Status Page: https://status.yourproject.com