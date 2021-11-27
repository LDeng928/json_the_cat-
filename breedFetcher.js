const request = require('request');

// URL and path to resource
const argv = process.argv.slice(2);
const breed = argv[0];

// GET api and pass the breed variable
const options = {
  url: `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'db617927-1d28-4f59-9ab4-3a475e1d20b0'
  }
};

// Callback function to deal with JSON data
const callBackFunction = (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);

    // Destruction
    const { description, name } = data[0];
    console.log(description);
    console.log(name);
  } else {
    console.log(`Error: ${error}`);
  }
};

// Call request
request(options, callBackFunction);
