export default {
  getResume: function() {
    const FileSaver = require("file-saver");
    const axios = require("axios");
    axios
      .get("./Resume_Sachin_Jhaveri.pdf", {
        responseType: "arraybuffer",
        headers: {
          Accept: "application/pdf"
        }
      })
      .then(response => {
        console.log(response);
        const blob = new Blob([response.data], {
          type: "application/pdf"
        });
        // response.data is an empty object
        FileSaver.saveAs(blob, Math.random());
      });
  }
};
