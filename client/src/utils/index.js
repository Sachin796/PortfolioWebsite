const axios = require("axios");

export default {
  getResume: function () {
    return axios
      .get("http://localhost:3001/api/download/Resume-Sachin-Jhaveri.pdf")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  },

  getTechSkills: () => {
    return axios
      .get("http://localhost:3001/api/techskills/")
      .then((res) => res.data.data[0])
      .catch((err) => console.error(err));
  },

  getFrontEndSkills: () => {
    return axios
      .get("http://localhost:3001/api/techskills/frontEnd")
      .then((res) => res.data.data)
      .catch((err) => console.error(err));
  },

  getBackEndSkills: () => {
    return axios
      .get("http://localhost:3001/api/techskills/backEnd")
      .then((res) => res.data.data)
      .catch((err) => console.error(err));
  },

  getDatabaseSkills: () => {
    return axios
      .get("http://localhost:3001/api/techskills/database")
      .then((res) => res.data.data)
      .catch((err) => console.error(err));
  },

  getProgrammingSkills: () => {
    return axios
      .get("http://localhost:3001/api/techskills/programming")
      .then((res) => res.data.data)
      .catch((err) => console.error(err));
  },

  sendEmail: function (req, res) {
    return axios
      .post("http://localhost:3001/api/sendEmail", {
        req,
      })
      .then((res) => res)
      .catch((err) => console.error(err));
  },
};
