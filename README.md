# Champions-League-Node-API

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Project Structure](#2-project-structure)
3. [Installation and Setup](#3-installation-and-setup)
4. [API Usage (Endpoints)](#4-api-usage-endpoints)
5. [Data Models](#5-data-models)
6. [Controllers and Services](#6-controllers-and-services)
7. [Repositories](#7-repositories)
8. [Utilities](#8-utilities)
9. [Errors and Error Handling](#9-errors-and-error-handling)
10. [Request and Response Examples](#10-request-and-response-examples)
11. [License](#11-license)
12. [Contributing](#12-contributing)

### 1. Project Overview

This is a backend CRUD application developed with Node.js and Express. It allows manipulation of data about football clubs and players. The application provides functionalities for creating, reading, updating, and deleting data (CRUD) using RESTful services.

### 2. Project Structure

- **Models**: Contains data interfaces, defining the structure of entities such as players and clubs.
- **Controllers**: Handles HTTP requests and delegates business logic to services.
- **Services**: Contains business logic and interacts with repositories.
- **Repositories**: Performs data persistence operations, such as retrieving or modifying records.
- **Utils**: Contains helper functions, such as creating HTTP responses.
- **Routes**: Defines the API routes and maps them to the corresponding controllers.
- **app.ts and server.ts**: Configures the Express server and initializes the application.

### 3. Docker Setup

To simplify the setup and avoid manual configuration of MySQL and the Node.js server, you can use Docker to containerize the application and database. 

#### Prerequisites

- Docker installed on your machine. You can download it from [Docker's official website](https://www.docker.com/get-started).


#### Steps
1. Clone the repository.
   ```bash
   git clone https://github.com/KainanAugusto/Champions-League-Node-API
   ```
2. Ensure you have the following .env file configuration:
   ```bash
   PORT=3000
   DB_HOST=mysql-server
   DB_USER=root
   DB_PASSWORD=senha123
   DB_DATABASE=futebol
   DB_PORT=3306
   ```
3. Start the containers using Docker Compose. From the root directory of the project, run:

   ```env
   docker-compose up --build
   ```
### This will:
- Build the Node.js application container.
- Start a MySQL container with the specified environment variables and initialize the database with some seed data.

The application should now be running on http://localhost:3000, and MySQL will be available at localhost:3306.

### Stopping the Containers
To stop the containers, simply run:

   ```bash
   docker-compose down
  ```
  
### If you make changes to the Dockerfile or the docker-compose configuration, you can rebuild the containers with:
   ```env
   docker-compose up --build
   ```




### 4. API Usage (Endpoints)

#### Players

- **GET /api/players**: Returns all players.
- **GET /api/players/:id**: Returns a player by ID.
- **POST /api/players**: Creates a new player.
- **PATCH /api/players/:id**: Updates a player by ID.
- **DELETE /api/players/:id**: Removes a player by ID.

#### Clubs

- **GET /api/clubs**: Returns all clubs.

### 5. Data Models

- **PlayerModel**:
  ```typescript
  export interface PlayerModel {
    id: number;
    name: string;
    position: string;
    nationality: string;
    team: string;
    age: number;
    goals: number;
    assists: number;
    rating: number;
}

  }
  ```
- **ClubModel**:
  ```typescript
  export interface ClubModel {
      id: number;
      name: string;
      stadium: string;
      country: string;
      city: string;
      founded: number;
      colors: string;
      website: string;
      logo: string;
  }
  ```

### 6. Controllers and Services

- **Controllers**: Receive HTTP requests and interact with services. Example:
  ```typescript
  export const getPlayers = async (req: Request, res: Response) => {
      const httpResponse = await Service.getPlayerService();
      res.status(httpResponse.statusCode).json(httpResponse.body);
  };
  ```

- **Services**: Perform business logic and interact with repositories. Example:
  ```typescript
  export const getPlayerService = async () => {
      const data = await PlayerRepository.findAllPlayers();
      return data ? await HttpResponse.ok(data) : await HttpResponse.noContent();
  };
  ```

### 7. Repositories

- **Repositories** handle data persistence, stored in a mySQL database. Example:
  ```typescript
  export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    try {
      const [rows] = await pool.execute('SELECT * FROM players');
      return rows as PlayerModel[];
    } catch (err) {
      console.error('Error fetching players:', err);
      throw err;
    }
};

  };
  ```

### 8. Utilities

- Helper functions to create HTTP responses, such as `ok`, `noContent`, `badRequest`, and `created`.
  ```typescript
  export const ok = async (data: any): Promise<HttpResponse> => {
      return {
          statusCode: 200,
          body: data
      };
  };
  ```

### 9. Errors and Error Handling

- The application handles responses and errors using specific HTTP status codes that reflect the outcome of the operation. These include codes for successful operations (such as `200` and `201`), no content (`204`), and client-side errors (`400`).

#### Response Codes
| Status Code | Description                 |
|-------------|-----------------------------|
| 200         | OK – Successful request     |
| 201         | Created – Resource created  |
| 204         | No Content – Successful, but no data to return |
| 400         | Bad Request – Invalid request or input |
| 404         | Resource Not Found          |
| 500         | Internal Server Error       |

### 10. Request and Response Examples

- **GET /api/players**:
  ```json
  [
    {
      "id": 1,
      "name": "Messi",
      "position": "forward",
      "nationality": "Argentina",
      "team": "PSG",
      "age": 36,
      "goals": 800,
      "assists": 350,
      "rating": 9.8
    }
  ]
  ```

- **POST /api/players**:
  ```json
  {
    "message": "Player created successfully"
  }
  ```

- **PATCH /api/players/:id** (Example Request Body):
  ```json
  {
    "age": 29
  }
  ```
  **Response**:
  ```json
  {
    "message": "Player updated successfully"
  }
  ```

### 11. License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 12. Contributing

Contributions are welcome!