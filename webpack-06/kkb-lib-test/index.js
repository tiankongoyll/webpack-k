if (process.env.NODE_ENV == "production") {
  module.exports = require("./dist/add-number.min.js");
} else {
  module.exports = require("./dist/add-number.js");
}
