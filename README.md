# **FreeSchool License**

**Project Title:** FreeSchool

**Author:** Luka Gogiashvili

---

## License

This project is licensed under the FreeSchool license. All rights reserved.

---

## How to Start the Project

### Frontend

To start the frontend, ensure you have Node and npm installed. Then, follow these steps:

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend

   ```

2. **Install the dependencies**:

   ```bash
   npm install

   ```

3. **Run the Vite React server**:
   ```bash
   npm run dev
   ```

### Backend

To start the backend, ensure you have a MySQL server running and have installed Java and Maven. Then, follow these steps:

1. **Navigate to the backend directory**:

   ```bash
   cd backend

   ```

2. **Install the dependencies**:

   ```bash
   mvn install

   ```

3. **Configure your database connection**:

   #### Option 1: Using MySQL

   1. Create a database named "capstone-project".
   2. Open the `application.properties` file located in the `src/main/resources` directory.
   3. Update the database connection details (e.g., URL, port, username, password) to match your MySQL server configuration.
   4. Run the database.

   #### Option 2: Using MySQL with Docker

   If you prefer not to install MySQL directly, you can use Docker to set up MySQL. Follow these steps:

   1. **Set up MySQL using Docker**:

      Run the following command to create and start a MySQL container:

      ```bash
      docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql
      ```

   2. Open the `application.properties` file located in the `src/main/resources` directory.
   3. Update the database connection details (e.g., URL, port, username, password) to match your MySQL server configuration.
   4. Run the database.

4. **Run the backend application**:
   Start the BackendApplication from your IDE or using the following Maven command
   ```bash
   mvn spring-boot:run
   ```

## Contact

For any questions or further information, please contact:

**Luka Gogiashvili**  
**Email:** [luka.gogiashvili.02@gmail.com](mailto:luka.gogiashvili.02@gmail.com)

_(c) 2024 FreeSchool. All rights reserved._
