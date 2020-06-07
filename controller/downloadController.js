const aws = require("aws-sdk");
const s3 = new aws.S3();
const fs = require("fs");

// AKIAI5GZ7CDIAHKNWYBA
// D9JZhQ7qlZjdlllsxDOUu+11BzRUxD2UaOqyjMlZ

module.exports = {
  download: function (req, res, next) {
    console.log("\x1b[43 Inside pages->downloadController");
    aws.config.update({
      accessKeyId: "AKIAI5GZ7CDIAHKNWYBA",
      secretAccessKey: "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",
    });
    var options = {
      Bucket: "sachinportfoliowebsite",
      Key: "Resume_Sachin_Jhaveri.pdf",
    };
    res.attachment("Resume_Sachin_Jhaveri.pdf");
    var fileStream = s3.getObject(options).createReadStream();
    fileStream.pipe(res);
  },
};
