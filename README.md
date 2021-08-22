## Template For Further Project README.mds

# Currency Exchanger

#### An application that takes an ammount of US currency to convert to one of the following currencies: Chinese yuan renminbi, Croation kuna, Fiji dollars, Hungarian forint, or Namibian dollars. It returns the amount of US dollars in the foreign currency at the rate exchange rate at the time of submission.

#### **By Shane Graff**

#### Table of Contents

1. [Technologies Used](#technologies)
2. [Description](#description)
3. [Setup/Installation Requirements](#setup)
4. [Specifications](#specs)
5. [Known Bugs](#bugs)
6. [License](#license)
7. [Contact Information](#contact)

## Technologies Used <a id="technologies"></a>

* Babel
* Bootstrap
* CSS
* css-loader
* eslint
* eslint-loader
* HTML5
* package-json
* Javascript
* Jest
* JQuery
* Node.js
* Node Package Manager
* popper.js
* style-loader
* webpack
* webpack-cli
* webpack-dev-server
* www.exchangerate-api.com

## Description <a id="description"></a>

The currency converter takes the number of US dollars that the user would like to convert into one of five other currencies. The user selects the foreign currency from a drop down menu. Once the submit button is pressed, the app makes a call to the exchangerate-api and returns the amount of the foreign currency the user would have after the exchange. If there is an issue with the API call, the app will display an error.
See below for setting up the build environment.

## Setup/Installation Requirements <a id="setup"></a>

1. Open the terminal on your local machine
2. Install [Node.js](https://nodejs.org/en/) if not already installed
3. Install [Nope Package Manager (npm)](https://www.npmjs.com/) if not already installed on your local machine. You can find installation instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)
4. Navigate to the directory where you will be cloning the project to
5. Clone the project to your current directory using the following command: `git clone https://github.com/ShanGGraff/currency_exchanger/`
6. Make sure to `cd` into the the cloned project directory. Make sure to be in the root directory of the project
7. Run `npm install` in the terminal to install project environment and required dependencies 
8. Run `npm run build` to create production environment
9. If you'd like to run project in a development server run the following: _`npm run start`_
10. To run Lint, use the following command: `npm run lint`
11. To run tests with Jest, use the following: `npm test`
12. User will also need to sign up for an API key from www.exchangerate-api.com. Once user has an API key, they will need to add an .env file in the root directory of the project. The .env file should contain the following: API_KEY=_your-api-key-here_.  **Important:** Make sure to add your .env file to .gitignore before pushing any changes to github so your API key isn't publicly viewable. 

## Specifications <a id="specs"></a>

| Behavior | Input | Output |
|:---:|:---:|:---:|
| Currency Exchanger receives: | _12_ in Number field and _Chinese yuan renminbi_ is selected | It should return something close to this: _The conversion rate from USD to CNY is: 77.9856 at a rate of: 6.4988_ 
| Currency Exchanger receives: | An incorrect API_KEY, or a currency not supported | It should return: _There was an error: Please check your API Key if you received a 403 Forbidden error. If you received a 404 not found, please make sure the entered currency type is supported_

## Known Bugs <a id="bugs"></a>
* The error objects returned from the API use hyphens as object keys, so can't specify exactly what the error is. For example and invalid key error returns the following:
{
    "result": "error",
    "documentation": "https://www.exchangerate-api.com/docs",
    "terms-of-use": "https://www.exchangerate-api.com/terms",
    "error-type": "invalid-key"
}
But since the error-type key uses a hyphen it can't be called from the returned error object. The same is true for the error returned when you enter a currency not supported by the API.

## License
* [MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2021 Creators 

## Contact Information <a id="contact"></a>

* Shane Graff <copellius@gmail.com>
* Github page: https://github.com/ShanGGraff/currency_exchanger
* LinkedIn: https://www.linkedin.com/in/shanegraff/