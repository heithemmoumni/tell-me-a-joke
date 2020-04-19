#! /usr/bin/env node
"use strict";

const request = require("request");
const url = "https://sv443.net/jokeapi/category/programming";

const TYPE_SINGLE = "single";
const TYPE_TWO_PART = "twopart";

function execute() {
  request(url, function (error, response, body) {
    if (error) console.error(error);

    if (response.statusCode === 200) {
      let response = JSON.parse(body);
      if (response.type == TYPE_SINGLE) {
        return console.log(`${response.joke.trim()}`);
      } else if (response.type == TYPE_TWO_PART) {
        return console.log(
          `${response.setup.trim()}\n${response.delivery.trim()}`
        );
      }
    }
    if (response.statusCode > 200) {
        return console.error(
          `Error: ${response.statusCode} - ${response.statusMessage}`
        );
      }
  });
}

execute();
