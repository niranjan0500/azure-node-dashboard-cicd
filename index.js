const express = require("express");
const os = require("os");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Node.js CI/CD Demo 🚀</h1>
    <p><b>Status:</b> Running Successfully</p>
    <p><b>Hostname:</b> ${os.hostname()}</p>
    <p><b>Platform:</b> ${os.platform()}</p>
    <p><b>Node Version:</b> ${process.version}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});