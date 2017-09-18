const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log("Listening on port 3000...");
});

app.get("/", function(request, response) {
  response.send("Hello World!");
})
