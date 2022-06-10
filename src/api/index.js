/* eslint-disable no-unused-vars */
const app = require("express")();
const axios = require("axios");

/** This file contains simple serverlerss functions used on Vercel. Made this cuz of CORS */

app.get("/api/certificados", async function (req, res) {
  const externalResponse = await axios
    .get("https://cursos.alura.com.br/user/hmelo2509/fullCertificate/03b702831d58f6fbf691a6bddc2630d4")

  res.send(externalResponse.data)

});

/* Local development
app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:${3001}`);
});
*/

module.exports = app;