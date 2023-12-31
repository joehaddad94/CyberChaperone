<img src="./readme-titles/title1.svg"/>
<br><br>

<img src="./readme-titles/title7.svg"/> 


- [Project Philosophy](#project-philosophy)
- [User Stories](#user-stories)
- [Prototyping](#prototyping)
- [Tech Stack](#tech-stack)
- [Demo](#demo)
- [OpenAI](#openai)
- [Performance](#performance)
- [How to Run](#how-to-run)

<br><br>  

<!-- project philosophy -->
<a name="project-philosophy"></a>
<img src="./readme-titles/title2.svg"/>

> CyberChaperone, an AI-powered facial emotion recognition application designed to prevent cyberbullying. By analyzing real-time user data, the app detects facial expressions and emotions to identify potential instances of cyberbullying.
>
> General users can utilize the software application to monitor their emotions using the webcam. Guardian users, on the other hand, have access to a comprehensive set of features aimed at creating a safer online environment for their loved ones. The application boasts an intuitive interface, enabling effortless interaction, result sharing.

### User Stories
<a name="user-stories"></a>
#### General User:
- As a general user, I want to sign in to the app using my credentials to access the webcam-based emotion detection feature.

#### Guardian User:
- As a guardian user, I want to view detection results of my dependents.
- As a guardian user, I want to have a demo of how the detection works.
- As a guardian user, I want to view detailed emotional analysis to gain insights into my dependents' overall well-being using AI.

<br><br>

<!-- Prototyping -->
<a name="prototyping"></a>
<img src="./readme-titles/title3.svg"/>

> We designed CyberChaperone using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Mockups (Mobile App)
| Login screen  | Register Screen | Camera Screen | Info Screen |
| ---| ---| ---| ---|
| ![Login](/readme/Mobile%20App%20Mockups/LoginScreen.png) | ![Register](/readme/Mobile%20App%20Mockups/RegisterScreen.png) | ![Camera](/readme/Mobile%20App%20Mockups/CameraScreen.png) | ![Info](/readme/Mobile%20App%20Mockups/InfoScreen.png) |

| Dashboard Screen  | Profile Screen | Users Screen | Create Users |
| ---| ---| ---| ---|
| ![Dashboard](/readme/Mobile%20App%20Mockups/DashboardScreen.png) | ![Dashboard](/readme/Mobile%20App%20Mockups/ProfileScreen.png) | ![Profile](/readme/Mobile%20App%20Mockups/UsersScreen.png) | ![CreateUsers](/readme/Mobile%20App%20Mockups/CreateUserScreen.png) ||

### Mockups (Software App)

| Login Page  | Landing Page |
| ---| ---|
| ![Login](/readme/Software%20App%20Mockups/LoginPage.png) | ![Landing](/readme/Software%20App%20Mockups/LandingPage.png) 
<!-- <br><br> -->

<!-- Tech stack -->
<a name="tech-stack"></a>
<img src="./readme-titles/title5.svg"/>

###  CyberChaperon is built using the following technologies:

- This project relies on [React Native](https://reactnative.dev/) with [TypeScript](https://www.typescriptlang.org/) for app development. React Native is a versatile cross-platform mobile app development framework that enables us to create applications for both iOS and Android.
- This project uses [Electron](https://www.electronjs.org/) as a framework for building cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript, allowing developers to create desktop software for Windows, macOS, and Linux from a single codebase.
- This project uses [Laravel](https://laravel.com/), a PHP web application framework, with MySQL as the database management system. Laravel simplifies web development by providing robust tools and an expressive syntax for building secure and scalable web applications.
- This Project uses [Node.js](https://nodejs.org/en) to handle data management while using [socket.IO](https://socket.io/), a websocket to facilitate data broadcast.
- This project uses OpenAI for daily data analysis.
<br><br>

<!-- Demo -->
<a name="demo"></a>
<img src="./readme-titles/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the CyberChaperone app with the following features:

### User Screens (Mobile)
Login screen  | Info Screen | Camera Screen |
| ---| ---| ---|
| ![Login](./user-screens-mobile/LoginScreen.gif) | ![Info](./user-screens-mobile/infoScreen.gif) | ![Camera](./user-screens-mobile/CameraScreen.gif) |

| Dashboard Screen  | Profile Screen | Users Screen |
| ---| ---| ---|
| ![Dashboard](./user-screens-mobile/DashboardScreen.gif) | ![Profile](./user-screens-mobile/ProfileScreen.gif) | ![Users](./user-screens-mobile/UsersScreen.gif) |

### User Screens (Software App)

 | Landing Page |
| ---| 
| ![Landing](./user-page-software-app/LandingPage.gif) 

<!-- OpenAI -->
<a name="openai"></a>
<img src="./readme-titles/title9.svg"/>

| Data sent to OpenAI: |
 ---|
 | ![sentData](/readme/OpenAI/openai1.PNG)

 | Data Received from OpenAI |
 ---|
 | ![dataReveived](./user-page-software-app/openai2.PNG)

<!-- Performance -->
<a name="performance"></a>
<img src="./readme-titles/title8.svg"/>

### Postman

This is a JSON file for the postman APIs collection for this project [CyberChaperone.postman_collection.json](/readme/CyberChaperone_postmanCollection.json). You can change the address of the APIs to test them with postman.

### Performance

URL: /api/save_emotions

```sh
PASS: Response time is within acceptable range //161 ms
PASS: Response status code is 200
PASS: Verify the 'data' array is present and contains at least one element
PASS: Response schema is valid
```
URL: /api/fetch_dashboard_analysis

```sh
PASS: Response time is within acceptable range //361 ms
PASS: Response status code is 200
PASS: Verify the 'data' array is present and contains at least one element
PASS: Response schema is valid
```

| Data received from detection every 100ms: |
 ---|
 | ![detectionData](/readme/Performance/DetectionData.PNG)

 | Real-time data sent to server through Web Socket (Socket.io): |
 ---|
 | ![realtimeDataToServer](/readme/Performance/realtimeDataToServer.PNG) 
<br><br>

<!-- How to run -->
<a name="how-to-run"></a>
<img src="./readme-titles/title6.svg"/>

> To set up CyberChaperone locally, follow these steps:

## Prerequisites

* Github
  ```sh
  git clone https://github.com/joehaddad94/CyberChaperone.git
  ```

## Installation

   ### Electron Software App:
1. Navigate to electron folder.
   ```sh
   cd electron
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app
   ```js
   npm start
   ```
### React Native App:
1. Navigate to mobile folder.
   ```sh
   cd mobile
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app
   ```js
   npm start
   ```
   
### Node.js:
1. Navigate to server-node folder.
   ```sh
   cd server-node
   ```
2. Install npm packages
   ```sh
   npm install
   ```
3. Run the server
   ```js
   node server.js
   ```

### Laravel:
1. Navigate to server-laravel folder.
   ```sh
   cd server-laravel
   ```
2. Rename the `.env.example` file to `.env` and name your database.
3. Install packages
   ```sh
   composer install
   ```
4. Make the migrations.
   ```js
   php artisan migrate
   ```
5. JWT Token
   ```js
   composer require php-open-source-saver/jwt-auth
   ```
   ```js
   php artisan vendor:publish --provider="PHPOpenSourceSaver\JWTAuth\Providers\LaravelServiceProvider"
   ```
   ```js
   php artisan jwt:secret
   ```
6. Run the server
   ```js
   node server.js
   ```
### XAMPP:
1. Install XAMPP.
2. Start Apache.
3. Start MySQL.

Now, you should be able to run all platforms locally and explore its features.