const express = require('express');
const { PORT } = require('./config/server.config');
const router = require('./routes');
const customRouter = require('./routes/customrouter');

const app = express();

app.use('/api', router); // localhost:3000/api/home
app.use('/custom',customRouter); // localhost:3000/custom/custom2


app.listen(PORT, () => {
    console.log(`Started server at port: ${PORT}`);
});

/**
 * How will u manage these kind of routes using express router ? 
 * 
 * 
 * localhost:3000/api/v1/products/:id
 * localhost:3000/api/v1/categories/:id
 * localhost:3000/api/v2/products/:id
 *  localhost:3000/api/v2/categories/:id
 * localhost:3000/api/v2/users/:id
 */