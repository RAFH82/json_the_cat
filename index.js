const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

const callback = (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log("\nHere are your results:\n\n", desc, "\n");
  }
};

fetchBreedDescription(breedName, callback);
