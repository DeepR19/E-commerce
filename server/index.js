const http = require('http');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");

const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(bodyparser.json());
app.use(
    cookieSession({
        name: "Session",
        keys: ["Deepak"],
        maxAge: 24 * 60*60*1000
    })
);

app.use(passport.initialize());
app.use(passport.session());

// link DB
require("./src/db/conn");

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true
    })
);

const router = require('./src/routes/router');
const accessRouter = require('./src/routes/accessRouter');

app.use("/auth", require("./src/routes/socialLinkRouter"));

app.use("/", router);
app.use("/user",accessRouter)

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
})