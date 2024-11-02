# Social Media Web Application

This repository is a Social Media Web Application that provides a user experience similar to popular platforms like Signal, Facebook, and Twitter. The application enables users to create posts, comment, share, receive notifications, and engage in private messaging. Built using React and Node.js, it utilizes a REST API and MongoDB for database management.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Documentation](#documentation)

## Overview

The Social Media Web App allows users to:

- Create and customize posts with text or images.
- Comment on and share other users' posts.
- Log in with user authentication (using JSON Web Tokens).
- Receive notifications for comments or shares.
- Engage in private messaging with other users.
- Control notification settings.

> **Note**: Environment keys are required and have been removed from this repository. Use your own keys in the `.env` file.

## Features

### Posts, Comments, and Sharing

- **Posts**: Users can create posts with text or image content.
- **Comments**: Users can comment on existing posts, including text and image replies.
- **Sharing**: Users can share posts with a link or an embedded instance of the original post.

### User Authentication

- **Login/Signup**: Users can log in with secure JWT-based authentication.
- **User Data Storage**: Data is stored in a MongoDB database to persist posts and profile information.

### Notifications

- **Alerts**: Users receive notifications for comments or shares on their posts.
- **Email/Browser Notifications**: Configurable email or browser alerts.
- **Notification Settings**: Users can enable or disable notifications.

## Technologies Used

- **Frontend**: React.js (HTML, CSS, JavaScript)
- **Backend**: Node.js, Express.js, REST API
- **Database**: MongoDB
- **Authentication**: JWT
- **Encryption**: Bcrypt for password hashing


## Setup

1. **Install Node.js**: Download and install Node.js from [here](https://nodejs.org/en/download/).

2. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/Social-Media-Web-App.git
    cd Social-Media-Web-App
    ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the `server/` directory and include the required environment variables (such as JWT_SECRET, MONGO_URI, etc.).

4. **Install Dependencies**:

    - **Client**: Open a terminal in the `client` directory and run:
    
        ```bash
        npm install
        ```

    - **Server**: Open another terminal in the `server` directory and run:
    
        ```bash
        npm install
        ```

5. **Run the Application**:

   - **Client**: In the `client` directory, start the React app:
    
        ```bash
        npm start
        ```

   - **Server**: In the `server` directory, start the Node.js server:
    
        ```bash
        npm run dev
        ```

6. **Launch**:

   The application should be running locally:
   
    - Client at `http://localhost:3000`
    - Server at `http://localhost:5000`

## Usage

- **Home Page**: Displays the main feed with posts from users.
- **User Authentication**: Register or log in to access features such as posting, commenting, and sharing.
- **Profile Page**: Displays user information and posts.
- **Notifications**: Get alerts for new comments or shares.

## Screenshots

### Home Page

![Home Page](screenshots/home_page.png)

### Profile Page

![Profile Page](screenshots/profile_page.png)

### Create Post

![Create Post](screenshots/create_post.png)

---

## Documentation

### File Structure Explanation

- **client/public/assets**: Stores profile and canvas images used for testing.
- **client/src/components**: Contains the main components of the application, including pages (Home, Login, Profile) and reusable components (Sidebar, Topbar, Feed, Post).
- **client/src/dummyData.js**: Temporary data used for testing the app's interface.
- **server/models**: Contains Mongoose schemas for `User` and `Post` data models.
- **server/routes**: API endpoints for authentication (`auth.js`), posts (`post.js`), and users (`users.js`).

---

Feel free to contribute to this project by forking the repository and submitting pull requests. For any issues or feature requests, please open an issue in the repository.

---

Enjoy building your own social media experience!


