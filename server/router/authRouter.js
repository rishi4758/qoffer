const mysqlCon = require("../database");
const passport = require("passport");
module.exports = (app) => {
  app.get(
    "/auth/google/",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  app.get(
    "/callback/auth",
    passport.authenticate("google"),

    (req, res) => {
      res.redirect("http://localhost:3000/");
    }
  );

  app.get("/auth/user", (req, res) => {
    res.send(req.user);
  });
  app.get("/auth/logout", (req, res) => {
    req.logout();

    res.redirect("http://localhost:3000/");
  });
};
