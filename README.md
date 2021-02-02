# National Routes

## Table of Contents

1. [Introduction](#introduction)
2. [Dependencies](#technologies)
3. [Features](#features)
4. [Routes](#routes)



## Introduction

Hello, Welcome to Parts House.
Parts House is your very own customizable parts tracker, where you can record valuable info of individual parts from your appliances and/or electronics. Record model numbers, serial numbers
and even where to re-purchase these items when you need them most.
Parts House is your very own customizable parts-house!

## Technologies

- Heroku
- Node
- Express Server
- Sequelize
- React
- Redux

## Features

 - ### Hosting on Heroku
	 Hosted on a live dependable server

- ### Sign-Up, Login, Demo, and About
	A function integrated into the splash page that will allow the user to login, sign-up, use a demo version the site, or read an about section with a detailed walkthrough.

- ### User Parts House
  Registered users have access to a user-parts-house page, which contains a side NavBar with all necessary tools and ability to view owned items.
	
- ### Side NavBar
	User has ability to create/edit/delete appliances/electronics.
  User ability to create/edit/delete parts.
  
- ### Where to Buy Part
  User can save the URL of the exact place to purchase the part (optional)

## Routes

(Get)
 - Splash Page (/)
 - User Parts House (/user/:userId/parts-house/:partsHouseId) 
 - Appliances (/user/:userId/parts-house/:partsHouseId/locations/:locationId/appliances)
 - Electronics (/user/:userId/parts-house/:partsHouseId/locations/:locationId/electronics)
 - Other (/user/:userId/parts-house/:partsHouseId/locations/:locationId/other)
  
 (POST/DELETE)
 - Create "location" (/user/:userId/parts-house/:partsHouseId/locations/create)
 - Delete "location" (/user/:userId/parts-house/:partsHouseId/locations/:locationId/delete)
 
 - Create "Record" (/user/:userId/parts-house/:partsHouseId/locations/:locationId/records/create)
 - Delete "Record" (/user/:userId/parts-house/:partsHouseId/locations/:locationId/records/:recordsId/delete)
 
 - Create "Part" (/user/:userId/parts-house/:partsHouseId/locations/:locationId/records/:recordsId/parts/create)
 - Delete "Part" (/user/:userId/parts-house/:partsHouseId/locations/:locationId/records/:recordsId/parts/:partsId/delete)
