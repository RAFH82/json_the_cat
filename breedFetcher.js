const searchQuery = process.argv.slice(2);
const request = require("request");

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${searchQuery[0]}`,
  (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (data.length > 0) {
        console.log("\nHere is your result:\n\n", data[0]["description"]);
      } else {
        console.log("Sorry, no cats here!\nPlease try another breed.");
      }
    } else {
      console.log("\nMeeeeoooowww! Something went wrong!\n");
      console.log(error);
      console.log("statusCode:", response && response.statusCode);
    }
  }
);
