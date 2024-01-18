const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ping route
app.get('/ping', (req, res) => {
    res.json({ status: 'ok' });
});

// Starting the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);  // INPUT_REQUIRED: Replace with a console log of your choosing, if desired
});