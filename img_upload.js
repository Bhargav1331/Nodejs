const express = require('express')
const app = express()
const fs = require('fs')
const multer = require('multer');
const upload = multer({ dest: 'uploads' });
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))



app.post('/upload', upload.single('myImage'), (req, res) => {
  // req.file contains information about the uploaded file
  // move the file to the destination folder using fs.rename()
  const oldPath = req.file.path;
  const newPath = 'uploads/' + req.file.originalname;
  console.log(newPath)
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error uploading file');
    } else {
      res.send('File uploaded successfully');
    }
  });
});

app.listen(5050)