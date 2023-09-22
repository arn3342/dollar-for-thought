# Project Setup and Usage Guide

## Suggested Package Manager

Please use `yarn` as the package manager for this project.

## Set up

To get started with this project, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone https://github.com/arn3342/dollar-for-thought.git
   ```

2. **Install Dependencies**:
   - Navigate to the project's root directory:
     ```
     cd your-project
     ```
   - Install project dependencies:
     ```
     yarn
     ```

3. **Install Dependencies for the `functions` Directory**:
   - Navigate to the `functions` directory:
     ```
     cd functions
     ```
   - Install dependencies for the functions directory:
     ```
     yarn
     ```

## Where to Start

The project uses Node.js with `express` as the middleware. Here's how to begin working on it:

1. **Create Controllers**:
   - Create your controller file in any directory under the `functions` directory (Suggested directory: `functions/controllers`).
   
2. **Integrate Controllers**:
   - Open the `functions/index.js` file.
   - Import your controller and integrate it within the `express` app. Here's an example:
     ```javascript
     const myController = require('./controllers/myController');
     app.use('/custom-path', myController);
     ```

3. **Debug the Project**:
   - To debug the project, run the following command:
     ```
     firebase emulators:start
     ```
   - In your console, you will see a preview link to access the emulator within the browser. It will look something like: `http://127.0.0.1:4000/functions`. Visit this URL to start testing your functions and endpoints.

4. **Commit Changes**:
   - After making a set of changes, add a commit message and push the changes to the `main` or `master` branch (or your desired branch):
     ```bash
     git add .
     git commit -m "Add your commit message here"
     git push origin main
     ```

Feel free to replace "yourusername/your-project" with the actual GitHub repository URL and update any placeholders as needed for your specific project. Happy coding!
