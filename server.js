const exp = require('constants');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.use((req, res) => {
    res.status(404).end();
});



// THIS CODE AT BOTTOM TO RUN SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});