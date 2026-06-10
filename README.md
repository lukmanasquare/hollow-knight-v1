# WEB103 Project 1 - Hollow Knight Boss Guide

Submitted by: **Lukman Adeyemi**

About this web app: **Hollow Knight Boss Guide is a listicle web application that showcases five unique Hollow Knight bosses. Users can browse boss cards on the homepage and click each boss to view a detailed page containing the boss's health, location, description, and image. The application is built using Node.js, Express, HTML, CSS, JavaScript, and PicoCSS.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

* [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
* [x] **The web app displays a title**
* [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
* [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**

  * [x] **Each detail view is a unique endpoint, such as `localhost:3000/bosses/1`, `localhost:3000/bosses/2`, `localhost:3000/bosses/3`, `localhost:3000/bosses/4`, and `localhost:3000/bosses/5`**
  * [x] **Unique URLs for each detailed view are demonstrated in the video walkthrough**
* [x] **The web app serves an appropriate 404 page when no matching route is defined**
* [x] **The web app is styled using PicoCSS**

The following **optional** features are implemented:

* [x] The web app displays items in a card-based layout rather than a traditional list.
* [x] Custom hero banner with Hollow Knight themed background image.
* [x] Custom CSS styling to enhance the appearance beyond PicoCSS defaults.

The following **additional** features are implemented:

* [x] Added a custom boss named **The Developer Knight** featuring a personalized character profile.
* [x] Added custom dark-themed styling inspired by the Hollow Knight game aesthetic.
* [x] Added a hero section with a call-to-action button linking users directly to the boss list.

## Video Walkthrough

Here's a walkthrough of implemented required features:

**https://drive.google.com/file/d/1X7BgtuNBUvNZPWMzQ6IYux9raBHtdaRo/view?usp=sharing**



## Notes

One challenge encountered during development was creating dynamic routes for each boss while ensuring all images loaded correctly through Express static file serving. Additional time was spent customizing the layout and styling to match the visual theme of Hollow Knight while maintaining the assignment requirements.

## License

Copyright 2026 Lukman Adeyemi

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
