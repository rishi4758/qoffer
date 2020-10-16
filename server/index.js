// init setup
const express = require("express");

const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const passport = require("passport");
const session = require("express-session");
const cookieSession = require("cookie-session");
const cors = require("cors");

const app = express();

app.use(fileUpload());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["jskdddslsk"],
    secure: false,
  })
);
// apply  middleware

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
// require https
app.use((req, res, next) => {
  if (
    req.hostname !== "localhost" &&
    req.get("X-Forwarded-Proto") !== "https"
  ) {
    return res.redirect(`https://${req.hostname}${req.url}`);
  }
  return next();
});
app.use(bodyParser.json());
app.use(function (err, req, res, next) {
  console.log(err);
});
require("./passport/googleOauth.js");
require("./router/index.js")(app);
require("./router/authRouter.js")(app);

// connect to the port
const port = process.env.PORT || 5004;
console.log("app is running at port " + port);

app.listen(port);
