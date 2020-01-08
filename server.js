var express = require("express");

var app = express();
var port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
