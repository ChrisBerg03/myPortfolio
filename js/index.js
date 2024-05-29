const fs = require("fs");
const path = require("path");

// Path to the hidden JSON file
const credentialsPath = path.join(__dirname, ".credentials.json");

// Read the file
fs.readFile(credentialsPath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading credentials file:", err);
        return;
    }

    // Parse the JSON data
    const credentials = JSON.parse(data);
    const username = credentials.username;
    const password = credentials.password;

    console.log("Username:", username);
    console.log("Password:", password);
});
