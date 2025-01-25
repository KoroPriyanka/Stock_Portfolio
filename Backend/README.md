# Stock Portfolio Tracker - Backend

## Description
This is the backend part of a Stock Portfolio Tracker application. It allows users to manage their stock portfolio, add, view, update, and delete stock holdings.

## Technologies Used
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

## Setup
1. Clone the repository.
2. Update the `application.properties` file with your MySQL database credentials.
3. Run the application using Maven or your preferred IDE.
4. API endpoints:
   - `GET /api/stocks`: Get all stocks
   - `POST /api/stocks`: Add a new stock
   - `PUT /api/stocks/{id}`: Update a stock
   - `DELETE /api/stocks/{id}`: Delete a stock
