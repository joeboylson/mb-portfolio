const https = require('https'); const fs = require('fs'); const options = { key: fs.readFileSync('./sec.key'), cert: fs.readFileSync('./www_mattboylson_com.crt'), ca: fs.readFileSync('./www_mattboylson_com.ca-bundle') };