const puppeteer = require('puppeteer');

const express = require('express')
const app = express()
app.use(express.static('aa'))

app.use('/aa', (req, res) => {
    (async () => {
        const pdf = require('html-pdf');
        const AdmZip = require('adm-zip');

        const html = '<html><body><h1>Hello, world!</h1></body></html>';

        const options = { format: 'Letter' };

        pdf.create(html, options).toBuffer((err, buffer) => {
            if (err) {
                console.error(err);
                return;
            }

            const zip = new AdmZip();
            zip.addFile('document.pdf', buffer);
            const zipBuffer = zip.toBuffer();

            // Send the zip file to the user as a download
            res.set('Content-Disposition', 'attachment; filename="documents.zip"');
            res.set('Content-Type', 'application/zip');
            res.send(zipBuffer);
        });

    })();
})

app.listen(6060)