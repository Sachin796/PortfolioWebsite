const axios = require("axios");

export default {
  getResume: function () {
    return axios
      .get("http://localhost:3001/api/download/")
      .catch((err) => console.error(err));
  },

  getTechSkills: function () {
    return axios
      .get("http://localhost:3001/api/techskills/")
      .catch((err) => console.error(err));
  },
};
