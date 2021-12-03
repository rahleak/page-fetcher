let url = process.argv[2];
let path = process.argv[3];

const fs = require('fs')
const request = require('request');


request(url, function (error, response, body) {
  let content = body;
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(path, content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
});
