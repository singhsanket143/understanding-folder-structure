const express = require('express');
const { PORT, EMAIL } = require('./config/server.config');

const app = express();


app.listen(PORT, () => {
    console.log(`Started server at port: ${PORT}`);
});

