//allows us to start the server
//creating http server
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express(); //app initialised as express app
const path = require("path");
const connectDb = require("./config/mongoose");
dotenv.config({ path: "config.env" }); //collabarative env we use dotenv
const port = process.env.port || 8080; //searching in dotenv file
//log request
app.use(morgan("tiny"));
//mongodb connection
connectDb();
//pass request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));
//set view engine
app.set("view engine", "ejs");
//set views folder where ejs files stored
//app.set("views", path.resolve(__dirname,""));
//load assets using middleware metho d use
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/script", express.static(path.resolve(__dirname, "assets/script")));
//load routers
app.use("/", require("./server/routes/router"));
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
var cookieParser = require("cookie-parser");
const passport = require("passport");
const passportlocal = require("./config/passport-local");
const localPassport = require("passport-local").Strategy;
app.use(express.static("assets"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
var expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(
  session({
    name: "skatyal1999",
    secret: "skatyal1999",
    saveUninitialized: false,
    resave: false,

    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
