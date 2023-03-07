const express = require('express');
const multer = require('multer');

const app = express();

// create multer middleware
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

// Set up the view engine to use EJS
app.set('view engine', 'ejs');

app.post('/upload', upload.single('image'), (req, res) => {
    const file = req.file;

    // move file to permanent location
    const targetPath = `uploads/${file.originalname}`;
    fs.renameSync(file.path, targetPath);

    // display success message
    res.send('Image uploaded successfully!');
});



// Set up the static folder
app.use(express.static('public'));

// Set up the routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
