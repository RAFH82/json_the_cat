const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (!error) {
        const data = JSON.parse(body);
        if (data.length > 0) {
          callback(null, data[0].description);
        } else {
          callback("Sorry, no cats here!\nPlease try another breed.");
        }
      } else {
        callback(error);
      }
    }
  );
};

module.exports = { fetchBreedDescription };

// backup of original non-refactored version
// const searchQuery = process.argv.slice(2);
// const request = require("request");
// const fetchBreedDescription = (breedName, callback) => {
//   request(
//     `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
//     (error, response, body) => {
//       if (!error) {
//         const data = JSON.parse(body);
//         if (data.length > 0) {
//           console.log("\nHere is your result:\n\n", data[0]["description"]);
//         } else {
//           console.log("Sorry, no cats here!\nPlease try another breed.");
//         }
//       } else {
//         console.log("\nMeeeeoooowww! Something went wrong!\n");
//         console.log(error);
//         console.log("statusCode:", response && response.statusCode);
//       }
//     }
//   );
// };
