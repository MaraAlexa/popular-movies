# Popular movies project

This project is a web application for browsing popular movies, display a short detail page of a selected movie and play a short movie trailer.
It uses **The Movie Data Base API** v3

## How to run the repo

In the terminal, navigate to the root project folder:

- Clone the repo by executing `git clone https://github.com/MaraAlexa/popular-movies.git`
- Install node modules by executing `yarn install`
- Start application locally by executing `yarn start`

## Project Setup details

1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
2. Added ESLint config
3. Installed on top of create-react-app the following packages:

   - react-modal for the video trailer modal screen
   - react-slick for image carousels
   - shaka-player for playing video
   - font-awesome for icons

## File Structure

`src` folder is the root level of the app. Here is where the app lives.

Inside the _src_ folder I made _components_, _screens_ and _api_ folders

The _screens_ folder contains all the Views of the app

The _components_ folder contains reusable components (SliderComponent and SingleCardMovie) and the Player component

The _api_ folder contains the api calls

## Project Implementation details

1. This project is working for _Google Chrome v49_ or higher

2. The project is fully responsive and includes the optional Search bar functionality and 2 unit tests.

3. To persist the data when refresing the MovieDetails page, I used localStorage to save the item. In a bigger project I would use Redux with Redux Persist.
