const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');

require('./db/mongoose')


const app = express();
const port = 4000;

app.use(express.json());
app.use(bodyParser.json());
// app.use(cors());

const blogRouter = require('./router/crudBlog');

app.use(blogRouter);


app.listen(port,() => {
    console.log(`Server is up on port ${port}`);
})