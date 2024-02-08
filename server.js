const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve files from the current directory
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

