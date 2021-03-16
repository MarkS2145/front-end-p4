## Google Maps JavaScript API
The Tracker App uses a Google Maps API to provide it's key functionality.  

References I used to get the API installed and up and running are documented below.

## API Key
An API key is required to use teh Google API.  This key is tied to a billing account and so it is important it is hidden from view.

The generated API key is hidden in ```.env``` that is excluded through our ```.gitignore``` file

## Google Documentation
The Google documentation is difficult to follow on how to actually get the Maps Javascript API up and running; in spite of providing javascript code that runs in their dev environment.

npm install react-google-maps didn't install the needed components and error out, likely due to a version mismatch.

## API Installation
Looking on the internet for way to get started in google javascript API I cam across this article which led to a successful install and running code, with an actual map, shown in my browser, of nothing but blue seas.  A strange place to start from, but a place on a map, none the less.

https://www.npmjs.com/package/@react-google-maps/api

It is from here I shall try and proceed.  A quick addition to the starting code for my TEST_LAT & TEST_LON and I now have a map centered on Los Angeles. It is the small successes that add up over time, and I am indebted to the author of the above example.

Here is another good resource on react google maps: https://react-google-maps-api-docs.netlify.app/


### .env file and secret keys

When using the initial code snippet from the googlemaps section above it was observed the map would display with a "development only" watermark and with a grey opacity layer over the top of it.  I experimented putting my key in and the map displayed without those two layers.  However, as my API KEY is tied to my personal billing it is improtnat that this not get out.  I worked to add it to my .env file but using the key proved anything but staright forward.   several articles later and many, many tries, I came across this article which explained the correct usage.

1. [Add a dotenv file to a React App]('https://stackoverflow.com/questions/49579028/adding-an-env-file-to-react-project)


Installation:  npm install dotenv --save
In my component, add: 
1. require('dotenv').config()
1. const KEY = process.env.REACT_APP_API_KEY
1. <LoadScript
          googleMapsApiKey={ KEY }
        >

This led to the map displaying correctly using my key.  __Success!__

## Google Maps JavaScript API
1. [Overview](https://developers.google.com/maps/documentation/javascript/overview)
1. [API v3 Reference](https://developers.google.com/maps/documentation/javascript/reference)
1. [Google Cloud Platform with Metrics](https://console.cloud.google.com/google/maps-apis/overview?project=clear-shell-307619)
1. [Excellent Documentation on API details](https://react-google-maps-api-docs.netlify.app/#section-introduction)
    1. Includes working code examples


### Adding a Marker
I am using a Marker to indicate the current location of a Vehicle.  The marker would have a unique id # in it corresponding to the selected vehicle.
1. [Marker details](https://react-google-maps-api-docs.netlify.app/#marker)
1. [Marker Labels](https://developers.google.com/maps/documentation/javascript/markers#marker_labels)

### Adding a Polyline (breadcrumb)
I would like to use the polyLine to indicate the path traveled by a vehicle.
1. [All things Polyline](https://react-google-maps-api-docs.netlify.app/#polyline)
1. [Drawing layer](https://developers.google.com/maps/documentation/javascript/drawinglayer)

### Adding an Info Window
This capability may be useful.
1. [Info Windows](https://developers.google.com/maps/documentation/javascript/infowindows)

### Future Development considerations:
1. [Adding marker clustering](https://developers.google.com/maps/documentation/ios-sdk/utility/marker-clustering)

