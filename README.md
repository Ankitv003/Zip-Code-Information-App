# Zip Code Information App

A simple React application that allows users to enter a postal code and fetch location information using the Zip Code API.

## Table of Contents

- [Introduction](#introduction)
- [Screenshots](#screenshots)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)


## Introduction

The Zip Code Information App is a web application built with React that provides users with location information for a given postal code. It uses the [Zip Code API](https://app.zipcodebase.com/api/v1) to fetch and display location details.


## Screenshots

![Zip Code App main page](<Screenshot (159).png>)
![Zip Code App search result part-1](<Screenshot (157).png>)
![Zip Code App search result part-2](<Screenshot (158).png>)

## Features

- Users can enter a postal code.
- The app fetches location information for the provided postal code.
- Location information displayed includes the country, state, place name, and more.
- Graceful error handling for failed API calls.
- Option to clear displayed information.


## Getting Started

To get started with the Zip Code Information App on your local machine, follow these steps:

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/your-username/zip-code-info-app.git
    ```
2. Change directory to the project folder:
    ```
     cd zip-code-info-app
    ```
3. Install project dependencies:
    ```
    npm install
    ```
4. Start the development server:
    ```
    npm start
    ```

5. Open your web browser and access the app at [http://localhost:3000](http://localhost:3000).

## Usage

1. Enter a postal code in the input field.

2. Click the "Fetch Location" button to retrieve location information.

3. The location information, including country, state, and place name, will be displayed.

4. If there is an error during the API call, an error message will be shown.

5. Click the "Clear" button to remove the displayed information.

