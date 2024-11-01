const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, "build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
