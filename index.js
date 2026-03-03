const express = require("express");
const app = express();
const os = require("os");

const PORT = process.env.PORT || 3000;

// Version can be changed to test CI/CD
const APP_VERSION = "1.0.0";

app.get("/", (req, res) => {
  res.send(`
    <h1>Node Dashboard CI/CD Working 🚀</h1>
    <hr/>
    <p><b>Status:</b> Running Successfully ✅</p>
    <p><b>Version:</b> ${APP_VERSION}</p>
    <p><b>Environment:</b> ${process.env.NODE_ENV || "Production"}</p>
    <p><b>Server Time:</b> ${new Date().toLocaleString()}</p>
    <p><b>Hostname:</b> ${os.hostname()}</p>
    <p><b>Port:</b> ${PORT}</p>
    <hr/>
    <p>💡 Change version number & push to GitHub to test CI/CD</p>
  `);
});

// Health Check Endpoint (Real DevOps Practice)
app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    time: new Date(),
    version: APP_VERSION
  });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});