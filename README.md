# NIST Password Validator

## Overview
* This application checks to see if a password is valid according to the following rules:
    - Passwords MUST:
        1. Have an 8 character minimum
        2. AT LEAST 64 character maximum
        3. Allow all ASCII characters and spaces (unicode optional)
        4. Not be a common password(pw.txt contains common passwords)

## Setup
* To set up a local copy of this project, perform the following:

* Clone the repo in your terminal:
```
git clone https://github.com/bschwartz10/nist-web-boilerplate.git
```
* Navigate into the project:
```
cd nist-web-boilerplate
```
* Install NPM Packages:
```
npm install
```
* Ensure tests are passing:
```
npm test
```
* Run Server:
```
node server.js
```
* Open application in browser:
```
http://localhost:3000/
```

## Libraries Used
* [Jest](hhttps://jestjs.io/) - Testing framework for Javascript

## Discussion
* I built a Validator javascript class to organize the functions that handle the logic for the password validator. My goal was to create numerous functions that each handled one part of the validation process. I then combined those functions into an 'execute' function that parses the result message to the user.

* I chose Jest as my testing framework. I wrote unit tests to to cover the happy/sad paths for the Validator class.

* I styled the page using flex-box and tried to replicate the color scheme of The Infatuation website as closely as I could.  
