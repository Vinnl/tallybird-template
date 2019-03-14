const express = require('express');
const tallybird = require('tallybird').tallybird;

const app = express();

app.use('/', tallybird);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Listening on port', port));
