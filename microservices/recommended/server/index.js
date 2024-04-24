const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3020; // Or any other port you prefer

// Enable CORS middleware
app.use(cors());

app.get('/news/:category', async (req, res) => {
    try {
        const filePath = '/Users/sahilnarwal/Documents/Sem-6/Minor Work/NewsOnTips/microservices/recommended/output.txt';
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err.message);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            // Parse the JSON data
            const jsonData = JSON.parse(data);
            console.log("Request Received !")
            // Send the parsed data as the response
            res.json(jsonData);
        });
    } catch (error) {
    // Handle errors
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
    