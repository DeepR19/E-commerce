const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use(bodyparser.json());

// link DB
require("./src/db/conn");

const router = require('./src/routes/router');
const accessRouter = require('./src/routes/accessRouter');

app.use("/", router);
app.use("/user",accessRouter)

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
})