# Users API Documentation

## Overview

This API provides endpoints to manage users. You can create, retrieve, update, and delete users. Below is a summary of each endpoint, including its purpose and expected inputs and outputs.

## Endpoints

### Get All Users

- **Method**: `GET`
- **Endpoint**: `/users`
- **Description**: Retrieves a list of users. Optionally filter users by their role.
- **Query Parameters**:
  - `role` (optional): Filter users by role. Possible values are:
    - `ADMIN`: Retrieves users with the role of ADMIN.
    - `STUDENT`: Retrieves users with the role of STUDENT.
- **Response**:
  - **200 OK**: Returns a list of users. The list may be filtered based on the `role` query parameter.
  - **404 Not Found:** Returns an error when there are no values found.

#### Example Request

**Request with role filter:**

```bash
GET /users?role=ADMIN
```

#### Example Response

```json
[
  {
    "id": 1,
    "name": "Jackson",
    "email": "john.doe@example.com",
    "role": "ADMIN"
  },
  {
    "id": 2,
    "name": "Alice",
    "email": "alice.johnson@example.com",
    "role": "STUDENT"
  }
]
```

### Get a Single User

- **Method**: `GET`
- **Endpoint**: `/users/:id`
- **Description**: Retrieves a single user based on the provided user ID.
- **Path Parameters**:
  - `id` (required): The ID of the user to retrieve. Must be an integer.
- **Response**:
  - **200 OK**: Returns the user details of a single user.
  - **404 Not Found**: If the user with the specified ID does not exist.

#### Example Request

```bash
GET /users/1
```

#### Example Response

```json
{
  "id": 3,
  "name": "Chloe",
  "email": "chloe@gmail.com",
  "role": "STUDENT"
}
```

### Create a User

- **Method**: `POST`
- **Endpoint**: `/users`
- **Description**: Creates a new user using the POST method.
- **Request Body**:
  - **Content-Type**: `application/json`
  - **Body**: An object that conforms to the `CreateUserDto` schema.

#### CreateUserDto Schema

- **name**: string (required) - The name of the user.
- **email**: string (required) - The email address of the user.
- **role**: 'ADMIN' | 'STUDENT' (required) - The role of the user. Possible values are `ADMIN` or `STUDENT`.

#### Example Request

**Request Body:**

```json
{
  "name": "new student",
  "email": "new@example.com",
  "role": "STUDENT"
}
```
