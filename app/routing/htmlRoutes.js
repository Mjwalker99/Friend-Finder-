var path = require('path');

// Routes
// =============================================================
module.exports = function(app){
// Basic route that sends the user first to the AJAX Page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

    //a USE route to home page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
      });
    };