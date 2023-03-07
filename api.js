const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require('axios');

const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];

app.get('/api/users', (req, res) => {
    res.json(data);
});

app.get('/api/data', (req, res) => {
    axios.get('http://localhost:5000/api/users')
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



