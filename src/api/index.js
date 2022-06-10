const app = require("express")();
const unirest = require("unirest");

app.get("/api/certificados", function (req, res) {
  const request = unirest
    .get("https://cursos.alura.com.br/user/hmelo2509/fullCertificate/03b702831d58f6fbf691a6bddc2630d4")
    .headers({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    });
  
  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    res.json(response.body);
  });
});
    
module.exports = app;