const express = require('express');
const https = require('https')
const port = process.env.PORT || 5000;
const fs = require('fs');
const path = require('path');

// https server
const app = express();

const options = {
  key: fs.readFileSync('./sec.key'),
  cert: fs.readFileSync('./www_mattboylson_com.crt'),
  ca: fs.readFileSync('./www_mattboylson_com.ca-bundle')
};

const httpServer = https.createServer(options, app)


// DOWNLOADABLE FILES
let downloadableFiles = {};

const setDownloadableFiles = (folder) => {
  fs.readdir(folder, (error, items) => {
    if (!error) {
      for (let item of items) {
        let itemPath = path.join(folder, item)
        
        if (fs.lstatSync(itemPath).isDirectory()) {
          setDownloadableFiles(itemPath)
        } else {
          downloadableFiles[item] = itemPath
        }
      }
    }
  })
}

setDownloadableFiles('public')

// SENDGRID
const getSendgridApiKey = () => {
  if (process.env.NODE_ENV !== 'production') {
    let config = require('./config')
    return config.SENDGRID_API_KEY;
  }
  else {
    return process.env.SENDGRID_API_KEY;
  }
}

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey( getSendgridApiKey() );

// CLIENT
app.use(express.static(`${__dirname}/client/build`));
app.use(express.static(`${__dirname}/public`));
app.use(express.json());

app.get('/download', (req, res) => {
  if (req.query.file && Object.keys(downloadableFiles).includes(req.query.file)) {
    return res.download(downloadableFiles[req.query.file])
  }
  return res.redirect('/')
})

app.post('/contact', async (req, res) => {

  // {email, subject, message, mol}
  if (req.body.email && req.body.subject && req.body.message) {

    const msg = {
      to: 'mjboylson@gmail.com',
      from: req.body.email,
      subject: req.body.subject,
      text: `Message: ${req.body.message} \n\n Meaning of Life: ${req.body.mol || 'Not Anwsered'}`,
    };

    try {
      await sgMail.send(msg);

      return res.send({
        success: true,
        errors: []
      })
    }
    catch(error) {
      return res.send({
        success: false,
        errors: [error]
      })
    }

  } else {
    return res.send({
      success: false,
      errors: ['Invalid inputs']
    })
  }

})

app.get('/*', (req, res) => res.sendFile(`${__dirname}/client/build/index.html`));

httpServer.listen(port, 'mattboylson.com')