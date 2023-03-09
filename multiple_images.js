// app.js

const express = require('express');
const multer = require('multer');

const app = express();
app.set('view engine', 'ejs');
// Set up Multer middleware

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

// Set up route to handle file uploads
app.post('/upload', upload.array('images', 5), function (req, res) {
    res.send('Files uploaded successfully!');
});


app.use('/', (req, res) => {
    res.render('index')
})

// Start server
app.listen(3000, function () {
    console.log('Server started on port 3000');
});
