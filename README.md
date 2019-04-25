# Popular movies project

This project is a web application for browsing popular movies, display a short detail page of a selected movie and play a short movie trailer.
It uses **The Movie Data Base API** v3

## How to run the repo

1. Clone the repo

2. In the terminal:

- navigate to the project folder
- npm install
- npm start

## Project Setup details

1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
2. Added ESLint config
3. Installed on top of create-react-app the following packages:

   - react-modal for the modal
   - react-slick for the carousels
   - shaka-player for playing the video trailer
   - font-awesome for icons

## File Structure

_src_ folder is the root level of the app. Here is where the app lives.

Inside the _src_ folder I made _components_, _screens_ and _api_ folders

## Project Implementation details

1. This project is working for _Google Chrome v49_ or higher

2. The project is fully responsive and includes the optional Search bar feature

3. For styling I used plain css. For bigger project I would use styled-components library

4. To persist the data when refresing the MovieDetails page, I used localStorage to save the item. In real project I would have used Redux but since this is a small project I chose use just React

5. For displaying the MovieDetails Page I used the same data that I am using for diplaying the Home page as I didn't want to make a new API call.
