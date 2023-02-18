# React Map with Autocomplete Textbox
This is a simple React application that allows users to find locations on the map using an autocomplete textbox. The map is rendered using Mapbox GL JS library and the autocomplete feature is implemented using Material UI's Autocomplete component.

# Getting Started
To get stared with this application, folloow:

1. Clone this repository to your local machine.

2. Install the dependencies by running the following command in the project directory:
    - npm install
In the constants.js file ,  ACCESS_KEY is placed.

3. Run the application using the following command:
  - npm run start
Open http://localhost:3000 

# WORKING:==

The application consists of two main components - the AutoComplete component and the DrawMap component. Also, it follows the redux to store longitude and latitude values.

AutoComplete Component:  renders a Material UI Autocomplete textbox that allows users to search for locations. The component uses the mockPlaces array from the constants.js file to provide suggested search results.
DrawMap Component : renders the Mapbox map with the location selected by the user from the autocomplete textbox. 

Dependencies
React
Redux
React Redux
Material UI
Mapbox GL
