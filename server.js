const express = require('express');
const app = express();

// Serve static files from the 'html' folder
app.use(express.static(__dirname));

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname +'index.html');
});

const port = 3002;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
