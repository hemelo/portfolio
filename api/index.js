/* eslint-disable no-unused-vars */
const app = require("express")();
const axios = require("axios");
const jsdom = require("jsdom");

/** This file contains simple serverlerss functions used on Vercel. Made this cuz of CORS */

app.get("/api/certificados", async function (req, res) {
  let courses = []
  let certificates = []

  const externalResponse = await axios
    .get("https://cursos.alura.com.br/user/hmelo2509/fullCertificate/03b702831d58f6fbf691a6bddc2630d4")
    .then(result => result.data)
    .then(content => {
      const parser = new jsdom.JSDOM(content)
      parser.window.document.querySelectorAll(".content-item-title").forEach((certificate) => certificates.push(certificate.innerHTML.trim()))

      certificates = certificates
        .filter(certificate => !certificate.includes("desabilitada") && certificate.includes("Formação:"))
        .map(certificate => { return certificate.replace(/\s+/g, " ")})
      
      parser.window.document.querySelectorAll(".content-courseList-courseName").forEach((course) => courses.push(course.innerHTML.trim()))
          
      courses = courses
        .map(course => { return course.split("(de")[0]})
        .map(course => { return course.replace(/\s+/g, " ")})
      courses = [...new Set(courses)]
    })

  res.setHeader("Content-Type", "application/json");
  res.json({courses, certificates})

});

/* ONLY LOCAL DEVELOPMENT
app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:${3001}`);
});*/


module.exports = app;