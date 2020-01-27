import axios from "axios";
const AWS = require("aws-sdk");
const fs = require("fs");
// const config = require("./config.json");

const filePath =
  "https://resumefilesachin.s3.ca-central-1.amazonaws.com/Resume.docx";
const bucketName = "resumefilesachin";
const key = "Resume.docx";

export default {
  getResume: function() {
    // axios({
    //   url: "http://localhost:3000/Sachin_Jhaveri_Resume.docx",
    //   method: "GET",
    //   responseType: "blob" // important
    // }).then(response => {
    //   console.log(response);
    //   console.log(response.data);
    //   const url = window.URL.createObjectURL(new Blob([response.data]));
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.setAttribute("download", "Resume_SJ.docx");
    //   document.body.appendChild(link);
    //   link.click();
    // });
    // var s3 = new AWS.S3();
    // const downloadFile = (filePath, bucketName, key) => {
    //   const params = {
    //     Bucket: bucketName,
    //     Key: key
    //   };
    //   console.log("Download File" + downloadFile);
    //   s3.getObject(params, (err, data) => {
    //     console.log(data);
    //     if (err) console.error(err);
    //     fs.writeFileSync(filePath, data.Body.toString());
    //     console.log(`${filePath} has been created!`);
    //   });
    // };
    // downloadFile(filePath, bucketName, key);

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
