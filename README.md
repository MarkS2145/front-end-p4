# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Google Maps API

I generated an API key which is hidden in .env.  The google documentation is difficult to follow in how to get an actual Javascript API up and running, in spite of providing javascript code that runs in their dev environment.

npm install react-google-maps didn't install the needed components and error out, likely due to a version mismatch.

Looking on the internet for way to get started in google javascript API I cam across this article which led to a successful install and running code, with an actual map, shown in my browser, of nothing but blue seas.  A strange place to start from, but a place on a map, none the less.

https://www.npmjs.com/package/@react-google-maps/api

It is from here I shall try and proceed.  A quick addition to the starting code for my TEST_LAT & TEST_LON and I now have a map centered on Los Angeles. It is the small success that add up over time, and ZI am indebted to the author of the above example.

Here is another good resource on react google maps: https://react-google-maps-api-docs.netlify.app/


### .env file and secret keys

When using the initial code snippet from the googlemaps section above it was observed the map would display with a "development only" watermark and with a grey opacity layer over the top of it.  I experimented putting my key in and the map displayed without those two layers.  However, as my API KEY is tied to my personal billing it is improtnat that this not get out.  I worked to add it to my .env file but using the key proved anything but staright forward.   several articles later and many, many tries, I came across this article which explained the correct usage.

'https://stackoverflow.com/questions/49579028/adding-an-env-file-to-react-project

Installation:  npm install dotenv --save
In my component, add: 
1. require('dotenv').config()
1. const KEY = process.env.REACT_APP_API_KEY
1. <LoadScript
          googleMapsApiKey={ KEY }
        >

This led to the map displaying correctly using my key.  Success!

### Adding a Marker
Here is a great resource for all things Javascript and Google API.
1. https://react-google-maps-api-docs.netlify.app/#marker


### CORS - Copy to Back End Readme
This has been a chellenging topic for me, and I still am not quite sure why.  Other cohort team members don't see to get as many CORS errors as I do.  And, fixes on their machines don't always work on mine.  Strange sounding, I know, but that is how my Friday, March 13th was spent trouble shooting CORS issues.
In the end we added the following to my compoents that overcame the issue to my Back end code.  
    
    https://enable-cors.org/server_expressjs.html

