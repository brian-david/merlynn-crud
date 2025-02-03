Merlynn Assessment

Description

This project is a Next.js 15 application that uses app routing and server actions along with Tailwind CSS. It connects to a MongoDB database using Mongoose. The application provides users with various functionalities to interact with the TOM API and store relevant data.

Features

Pull metadata from the TOM API for the "Drink choice" model and display the model name and input variables in a form for the user to complete. This should hit the v3/models or v3/models/[id] endpoints.

Query the model with the user’s input and display the decision on the screen. This should hit the v3/decision/[id] endpoint.

Store data and decisions gathered from the TOM API.

Implement security considerations.

Add batch functionality of the TOM API.

Allow the user to pick any model from the TOM API.

Requirements

Before setting up the project, ensure you have the following dependencies installed:

Node.js (version X.X.X or later)

MongoDB (ensure an instance is running or provide a remote connection string)

Next.js 15

Mongoose

Tailwind CSS

Setup Instructions

Follow these steps to set up and run the application:

1. Clone the repository

git clone https://github.com/your-repo/project-name.git
cd project-name

2. Install dependencies

npm install

3. Set up environment variables

Create a .env file in the root directory and add the required environment variables:

DATABASE_URL=your-mongodb-connection-string
API_KEY=your-api-key
OTHER_VAR=your-value

4. Run database migrations (if applicable)

npx prisma migrate dev

5. Start the application

Development mode:

npm run dev

Production mode:

npm run build
npm start

Running Tests

To run tests, use the following command:

npm test

API Endpoints (if applicable)

Method

Endpoint

Description

GET

/api/models

Fetches models from TOM API

GET

/api/models/:id

Fetches specific model details from TOM API

POST

/api/decision/:id

Queries the model and retrieves a decision

POST

/api/store

Stores gathered data and decisions

GET

/api/batch

Implements batch functionality of the TOM API

Security Considerations

Implement authentication and authorization.

Secure API keys and sensitive data in environment variables.

Use rate limiting to prevent API abuse.

Validate and sanitize user input to prevent injection attacks.

Contributing

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Commit your changes (git commit -m 'Add feature').

Push to the branch (git push origin feature-branch).

Create a Pull Request.

License

This project is licensed under the MIT License.

Contact

For any questions or issues, feel free to reach out to [your-email@example.com] or open an issue in the repository.