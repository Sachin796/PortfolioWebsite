const axios = require("axios");

export default {
  getResume: function () {
    console.log("Inside getresume");
    return axios.get("http://localhost:3001/api/download");
  },

  getTechSkills: function () {
    return axios
      .get("http://localhost:3001/api/techskills")
      .catch((err) => console.error(err));
  },
};
