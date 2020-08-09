const request = require("request");
const url = "https://official-joke-api.appspot.com/jokes/random";

const TYPE_SINGLE = "single";
const TYPE_TWO_PART = "twopart";
function execute() {
  request(url, function (error, response, body) {
    if (error) console.error(error);

    if (response.statusCode === 200) {
      let response = JSON.parse(body);
      return console.log(
        `
        \n- ${response.setup.trim()}\n- ${response.punchline.trim()}\n
        `
      )
    }
    if (response.statusCode > 200) {
        return console.error(
          `Error: ${response.statusCode} - ${response.statusMessage}`
        );
      }
  });
}
execute()