import axios from "axios";

export default {
  getResume: function() {
    axios({
      url: "http://localhost:3000/Sachin_Jhaveri_Resume.docx",
      method: "GET",
      responseType: "blob" // important
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Resume_SJ.docx");
      document.body.appendChild(link);
      link.click();
    });
  }
};
