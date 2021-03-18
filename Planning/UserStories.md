# Tracker App User Stories

## Front End Functionality
this section should help answer why we have this App and it's value tot he user.

### Background
Tracking Vehicular Assets adds value to a business ensuring that the operations manager/fleet owner understands where their assets are, in real time.

This app provides initial functionality for that capability.

## Role: Fleet Manager (FM)

### Creating a Vehicle Fleet
As a FM:
1. __[x]__ I would like to be able to record a vehicle asset with the following attributes:
* Vehicle Name
* Vehicle Image
* Driver Name
* Driver Phone Number
1. __[x]__ My Vehicle Asset shall send it's current position, Latitude and Longitude, to be stored for retrival by the FE App.
1. __[x]__ I would like each vehicle to have a unique identifier assigned to it.
1. __[x]__ My vehicle fleet information should persist day to day, session to session, and information not be lost when my browser closes.


### Managing a Vehicle Fleet
As a FM:
1. __[]__ I would like to be able to update my vehicle assets attributes when the need arises through the FE App.

#### Future considerations
As a FM:
1. __[]__ I would like to remove a Vehicle from service
1. __[]__ I would like to be able to remove a vehicle from the db when it is no longer part of my fleet.  I understand this will mean all associated data with it will be lost/desstroyed.

## Viewing my Fleet
As a User:
1. __[x]__ I would like to be able to have all vehicle information and current position of my fleet be loaded when the Front End (FE) application loads.
1. __[x]__ I would like to be able to select a vehicle to see it's detailed information attributes, when it was last udpated, and it's current location marked on a map.

#### Future considerations
As a User:
1. __[]__ I would like to see periodic updates, e.g. App refreshes data every # minutes or seconds.
1. __[]__ I would like to see a breadcrumb of where my vehicle has traveled over the past period of time. e.g. 1 day, or since start of current business day.





