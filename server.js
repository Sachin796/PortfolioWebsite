// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3001;
// const app = express();
// const serverRoutes = require("./server/routes");

// // Database
// // const serverroutes = require("./server/routes/htmlRoutes");

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.use(express.static(__dirname + "/public"));

// console.log("Before serverRoutes")
// app.use(serverRoutes);

// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   ``;
// });

// app.listen(PORT, function() {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
