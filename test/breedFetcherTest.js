// breedFetcherTest.js

const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", done => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  }).timeout(3000); // added timeout because test was taking longer than 2000ms

  it("returns an error for an invalid/non-existant breed", done => {
    fetchBreedDescription("Koolkat", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, "Sorry, no cats here!\nPlease try another breed.");

      const expectedDesc = undefined;

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  }).timeout(5000); // added timeout because test was taking longer than 2000ms
});
