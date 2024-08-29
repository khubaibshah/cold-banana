Chilled Grape
=============
[![Netlify Status](https://api.netlify.com/api/v1/badges/9958de88-28a0-4540-825c-ccec228552f7/deploy-status)](https://app.netlify.com/sites/chilled-grape/deploys)
![JavaScript](https://img.shields.io/badge/JavaScript-ffdf40?style=flat-square&logo=javascript&logoColor=black)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white)


Welcome to **Chilled Grape**! This project is an e-commerce application that showcases a variety of products with a modern and responsive design. Our platform offers an engaging and user-friendly experience for browsing and purchasing products.

Technologies Used
-----------------

### Frontend

-   **Vue 3**: The core framework used for building the user interface. Vue 3 provides a reactive and component-based architecture, making it ideal for creating interactive and dynamic web applications.

-   **Pinia**: A state management library for Vue.js. It is used to manage the state of the application, including product details and user interactions, providing a more streamlined and type-safe alternative to Vuex.

-   **Vite**: A fast build tool that offers a smooth development experience with instant server start and fast hot module replacement (HMR). Vite is used for building and serving the Vue.js application.

-   **TypeScript**: A superset of JavaScript that provides static typing. TypeScript helps to catch errors early during development and improves code quality and maintainability.

-   **PrimeVue**: A collection of rich UI components for Vue.js. It enhances the visual design and functionality of the application with components like buttons, cards, and icons.

### Backend

-   **ProductService**: A service layer that interacts with an API to fetch product data. It abstracts away the complexities of data retrieval and provides a clean interface for the frontend to consume.

### Build Tools

-   **ESLint**: A tool for identifying and fixing problems in JavaScript and TypeScript code. It helps maintain code quality and consistency throughout the project.

-   **Prettier**: A code formatter that ensures a consistent style across the codebase, making it easier to read and maintain.

Features
--------

-   **Product Display**: Showcase products with images, names, prices, and ratings. Products are displayed in a grid format, and users can view detailed information about each product.

-   **State Management**: Manage application state using Pinia. This includes handling product data and user interactions in a scalable and type-safe manner.

-   **Environment Variables**: Configurable environment variables for different deployment environments (e.g., development, production). These variables are managed using Vite's environment variable system.

## Deployment

The site is deployed and live on [Netlify](https://www.netlify.com/), providing a seamless hosting solution with continuous deployment from the Git repository.

Setup and Development
---------------------

1.  **Clone the Repository**

    bash

    Copy code

    `git clone https://github.com/yourusername/chilled-grape.git
    cd chilled-grape`

2.  **Install Dependencies**

    bash

    Copy code

    `npm install`

3.  **Run the Development Server**

    bash

    Copy code

    `npm run dev`

    This will start a local development server and open the application in your default browser.

4.  **Build for Production**

    bash

    Copy code

    `npm run build`

    This command generates a production-ready build of the application in the `dist` directory.

Project Structure
-----------------

-   **`src`**: Contains the source code of the application.

    -   **`components`**: Vue components used throughout the application.
    -   **`stores`**: Pinia store definitions for managing application state.
    -   **`services`**: Service layers for interacting with APIs.
    -   **`assets`**: Static assets like images and stylesheets.
    -   **`views`**: Vue components that represent different pages or views of the application.
-   **`public`**: Static assets that are directly served.

-   **`vite.config.ts`**: Vite configuration file for setting up the build tool.

-   **`tsconfig.json`**: TypeScript configuration file.

Contributing
------------

If you would like to contribute to the Chilled Grape project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your changes.
3.  Make your changes and test them.
4.  Submit a pull request with a description of your changes.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.

Contact
-------

For any questions or feedback, please reach out to us at contact@chilledgrape.com.


Live Site
--------

https://chilled-grape.netlify.app
