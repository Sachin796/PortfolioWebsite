var db = require("../models");

var syncOptions = {};
syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;

db.sequelizeConnection.sync(syncOptions).then(result => {});
