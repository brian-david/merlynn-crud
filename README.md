# Merlynn Assessment

## Description

This project is a Next.js 15 application that uses app routing and server actions along with Tailwind CSS. It connects to a MongoDB database using Mongoose. The application provides users with various functionalities to interact with the TOM API and store relevant data.

## Features

- Pull metadata from the TOM API for the "Drink choice" model and display the model name and input variables in a form for the user to complete. This should hit the v3/models or v3/models/[id] endpoints.

- Query the model with the user’s input and display the decision on the screen. This should hit the v3/decision/[id] endpoint.

- Store data and decisions gathered from the TOM API.

## Requirements

Before setting up the project, ensure you have the following dependencies installed:

- Node.js

- MongoDB (ensure an instance is running or provide a remote connection string)

- Next.js 15

- Mongoose

- Tailwind CSS

## Setup Instructions

Follow these steps to set up and run the application:

1. Clone the repository
   - git clone git@github.com:brian-david/merlynn-crud.git
   - cd merlynn-crud

2. Install dependencies
   - ```npm install```

3. Set up environment mongodb connection string
   - in ```lib/dbCommect.ts``` on line 13 update the var ```MONGODB_URL``` to your connection string

4. Start the application
   
      **Development mode:**
         
      ```npm run dev```

## License

This project is licensed under the MIT License.

## Contact

For any questions or issues, feel free to reach out to brian.irons@outlook.com.
