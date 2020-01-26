const axios = require("axios");

console.log("Inside /utils/index.js");

export default {
  getintro: function() {
    return axios.get("/");
  }
};
