const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
app.set('view engine', 'ejs')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "singleFile") {
            cb(null, "uploads/single/");
        } else {
            cb(null, "uploads/multiple/");
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '.jpg');
    },
});

const upload = multer({ storage });

app.post('/upload', upload.fields([{ name: "singleFile" }, { name: "multipleFiles" }]), (req, res) => {

    const { files } = req;
    console.log(req.files)
    if (files.singleFile) {
        const { filename } = files.singleFile[0];
        const filePath = `uploads/${filename}`;
        console.log('..............Image...........................................')

        console.log(filePath)

    }

    if (files.multipleFiles) {
        const paths = files.multipleFiles.map((file) => `uploads/${file.filename}`);
        console.log('..........Sub Images...............................................')

        for (i = 0; i < paths.length; i++) {
            console.log(paths[i])
        }

    }
    console.log('.............Form Data............................................')
    console.log(req.body)
    res.send('<center><h1>Success....</h1></center>')

});

app.use('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});


{/* <form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="singleFile" /><br />
    <input type="file" name="multipleFiles" multiple /><br /> <br>
    Name: <input type="text" name="name"> <br><br>
    Age:<input type="text" name="age"> <br><br>
    Email: <input type="email" name="email"> <br> <br>
    <input type="submit" value="Upload" />
</form> */}
