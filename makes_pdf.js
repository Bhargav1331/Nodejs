const puppeteer = require('puppeteer');

const express = require('express')
const app = express()
app.use(express.static('aa'))

app.use('/aa', (req, res) => {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Replace `htmlString` with the HTML you want to convert to a PDF
        const htmlString = '<html><body><h1>Hello, world!</h1><p>This is an example of converting HTML to PDF using Puppeteer.</p></body></html>';

        await page.setContent(htmlString);

        const pdf = await page.pdf();

        // Do something with the PDF, such as sending it to the client as a download
        // For example:
        res.set('Content-Type', 'application/pdf');
        res.set('Content-Disposition', 'attachment; filename=example.pdf');
        res.send(pdf);

        await browser.close();
    })();
})

app.listen(6060)