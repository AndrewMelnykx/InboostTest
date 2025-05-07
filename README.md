# React Flow App

[View the To-Do App Demo](https://andrewmelnykx.github.io/ToDoTest/)


While developing this To-Do Application—a clean, scalable task manager built with React, TypeScript, and Redux Toolkit—you might want to keep your terminal environment tidy, especially when running dev servers, testing, or building the app.

(![Screenshot 2025-05-08 003740](https://github.com/user-attachments/assets/0e5217f7-4787-4393-8e2d-b37bbd2d1406))


## Features
- **React with TypeScript**: Ensures type safety and promotes scalable development.
- **Redux Toolkit**: Simplifies state management with minimal boilerplate.
- **Vite**: Provides a fast development and build environment.
- **Drag and Drop**: Allows users to reorder tasks with drag-and-drop functionality for better task management.
- **Jest Testing**: Includes basic unit tests using Jest to ensure the reliability of components and Redux logic.
- **React Flow** Includes sole and group nodes creating
## Getting Started

### Prerequisites
Before running the project, ensure the following are installed:
- [Node.js (v16 or higher)](https://nodejs.org/)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Clone the Repository
Start by cloning the repository and navigating into the project directory:
```bash
git clone https://github.com/YourUsername/todo-app.git
cd todo-app
Install Dependencies
Install the required dependencies for the project:

Using npm:

bash
Copy code
npm install
OR using yarn:

bash
Copy code
yarn install
Run the Project Locally
Launch the development server to view the app in your browser:

bash
Copy code
npm run dev
Application Structure
Here’s an overview of the application’s structure:

src/
│
├── components/                         # Reusable UI components
│   ├── flow-element/                    # components => FlowElement (folder)
│   └── node-tools/            # components => NodeToolsPlaintext (folder)
│
├── store/                              # Redux Toolkit store and slices
│
└── assets/ (optional)                  # Static assets like icons, images, etc.

Core Functionality
Node Management: Create, group, connect, and delete visual task nodes.
Flow Persistence: Node states and layouts are stored efficiently using Redux Toolkit.
One-Click Reset: Instantly clear all nodes, connections, and saved data.
Responsive Design: Flow canvas and UI adapt smoothly to all screen sizes.
Drag and Drop: Freely move and connect nodes within the interactive flow.
Jest Testing: Includes tests for flow logic, components, and Redux state.

Proficiency in React and TypeScript for building scalable applications.
Best practices in state management using Redux Toolkit.
Fast and efficient development workflows using Vite.
An enhanced user experience through drag-and-drop functionality.
Jest testing to ensure reliable components and logic.


