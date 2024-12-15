
# Trial-Task-NextJs

This is the front-end for the **Trial-Task** application built using **Next.js**. The application fetches and displays tasks from the backend API (Laravel) and provides the functionality to view task details.

## Features
- **Task List**: Display all tasks fetched from the API.
- **Task Details**: View the details of a task when clicking on "View".
- **Responsive**: The layout is responsive and adapts to mobile devices.
- **Navigation**: Users can click on "View" to see the task details in  a new page.

## Technologies Used
- **Next.js** (Version 15.1.0 with Turbopack)
- **React** for the front-end framework
- **TailwindCSS** for styling
- **FontAwesome** for icons
- **Axios** (or Fetch API) for API requests

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NadaBahaa/Trial-Task-NextJs.git
   ```

2. Navigate to the project folder:

   ```bash
   cd Trial-Task-NextJs
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Setup

1. Ensure you have the backend API (Laravel) running. The API should be available at `http://localhost:8000`.
   
2. You may need to configure the API base URL in the `.env.local` file:

   ```plaintext
   BASE_URL=http://localhost:8000/api
   ```

   If your backend is running on a different URL or port, update the `BASE_URL` accordingly.

## Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

The front-end interacts with the following API endpoint:

- **GET /tasks**: Fetches all tasks.
- **GET /tasks/{id}**: Fetches details of a single task.

Make sure that the Laravel backend is running and accessible at the specified `BASE_URL`.

## Structure

```
/app
  /page.tsx       # Main entry page for task list
  /tasks/[id]     # Page to view task details
/public
  /favicon.ico
  /images         # Static images
/styles
  /globals.css    # Global CSS file
```

## Troubleshooting

- **API Issues**: Ensure that the backend API is running and accessible. You can check the response by accessing the API directly in your browser or via Postman.

## License

This project is open source and available under the MIT License.

