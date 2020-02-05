const fs = require("fs")
//  the path package to get the correct file path for  html
var path = require("path");

module.exports = function(app) {
  // HTML GET Requests for HTML pages

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});
};
