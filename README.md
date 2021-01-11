## Netflix Replication/Clone

This is my personal Netflix Clone project, built with React, Firebase, JavaScript, HTML5 and CSS3.

## Project Status

This project is currently in development. Additional functionality as well some UI effects and UI fixings are in progress.

## Project Screen Shots

![alt text](https://github.com/oplevan/netflix-clone/raw/master/screenshots/netflix-clone-1.jpg 'screenshot 1')
![alt text](https://github.com/oplevan/netflix-clone/raw/master/screenshots/netflix-clone-2.jpg 'screenshot 2')
![alt text](https://github.com/oplevan/netflix-clone/raw/master/screenshots/netflix-clone-3.jpg 'screenshot 3')
![alt text](https://github.com/oplevan/netflix-clone/raw/master/screenshots/netflix-clone-4.jpg 'screenshot 4')
![alt text](https://github.com/oplevan/netflix-clone/raw/master/screenshots/netflix-clone-5.jpg 'screenshot 5')
![alt text](https://github.com/oplevan/netflix-clone/raw/master/screenshots/netflix-clone-6.jpg 'screenshot 6')

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/`

## Reflection

In this React Project I'm trying to replicate Netflix - the world's leading streaming entertainment platform. At this moment it has multiple pages such as Home, Sign In & Sign Up and Browse.

I used Firebase auth to store data in the Firebase auth database when a user signs up & signs in. I build this app using React (custom hooks, context, portals), Compound & Styled components for styling, React Router for navigation, as well as custom UI effects such as hover and modal.

The first challenge I ran into was Authentication. This lead me to spend some time on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties.

The other one was hover effect on the Browse Page. I spend some time on original Netflix Website trying to figure out how it works there. Now it pretty much works the same as on Netflix but still needs some adjustments.

The technologies implemented in this project are React, React-Router 5.2, Firebase(Firestore/Auth) and a significant amount of JavaScript, JSX, Animation, HTML and CSS.

In the next iteration I plan on adding Watch page, preview video, Recommendations, Account & Profile Manage, improving the UI, etc.
