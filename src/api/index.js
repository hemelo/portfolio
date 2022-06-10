const app = require("express")();
const unirest = require("unirest");

app.get("/api/certificates", async function (req, res) {
  const request = await unirest
    .get("https://cursos.alura.com.br/user/hmelo2509/fullCertificate/03b702831d58f6fbf691a6bddc2630d4")
    .headers({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    });
  
  console.log(request)
  res.json(request)
});
    
module.exports = app;