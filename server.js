const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


