# WEB103 Project 2 - Hollow Knight Boss Guide

Submitted by: **Lukman Adeyemi**

## About this web app

Hollow Knight Boss Guide is a listicle web application that showcases five unique Hollow Knight bosses. Users can browse boss cards on the homepage and click each boss to view a detailed page containing the boss's health, location, description, and image.

The application is built using **Node.js, Express, HTML, CSS, JavaScript, PicoCSS, and PostgreSQL**. Data is dynamically retrieved from a **Render PostgreSQL database** instead of using hardcoded data.

Time spent: **2 hours**

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **Data is supplied to the app using a Render PostgreSQL database**
- [x] **The web app is connected to a Render PostgreSQL database**
- [x] **The database contains an appropriately structured table for the list items**
- [x] **The application retrieves and displays data dynamically from PostgreSQL**

## Optional Features

The following **optional** features are implemented:

- [x] The web app displays items in a card-based layout rather than a traditional list.
- [x] Custom hero banner with a Hollow Knight themed background image.
- [x] Custom CSS styling to enhance the appearance beyond PicoCSS defaults.
- [x] Individual detail pages for each boss using dynamic routes.

## Additional Features

The following **additional** features are implemented:

- [x] Added a custom boss named **The Developer Knight** featuring a personalized character profile.
- [x] Added a custom dark-themed user interface inspired by the Hollow Knight game aesthetic.
- [x] Added a hero section with a call-to-action button linking users directly to the boss list.
- [x] Implemented database seeding using a reset script to populate the PostgreSQL database.

## Database Setup

The application uses a **Render PostgreSQL database** with a `bosses` table containing the following fields:

| Column      | Type               |
| ----------- | ------------------ |
| id          | SERIAL PRIMARY KEY |
| name        | VARCHAR(255)       |
| health      | INTEGER            |
| location    | VARCHAR(255)       |
| description | TEXT               |
| image       | VARCHAR(255)       |

The database is initialized and populated using:

```bash
npm run reset
```

Environment variables are stored securely in a local `.env` file and excluded from version control using `.gitignore`.

## Video Walkthrough

Here's a walkthrough of the implemented features:

Hollow Knight 2.gif
![Hollow Knight Website Walkthrough](Hollow%20Knight%202.gif)



## Notes

One challenge encountered during development was migrating the application from hardcoded data stored in a JavaScript file to a PostgreSQL database hosted on Render. Additional effort was required to configure environment variables, create database schemas, seed data programmatically, and update Express routes to retrieve data dynamically from the database.

## License

Copyright 2026 Lukman Adeyemi

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
