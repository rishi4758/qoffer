const passport = require("passport");
const mysqlCon = require("../database");

const strategy = require("passport-google-oauth20").Strategy;

const google = new strategy(
  {
    clientID:
      "327235215667-2f7nt0f7gi0bikg6vnp24p668frj7pan.apps.googleusercontent.com",
    clientSecret: "3pRBPcZbkSvXRr9WY3Mv6K46",
    callbackURL: "/callback/auth",
    proxy: true,
  },
  async (Token, refreshToken, profile, done) => {
    mysqlCon.query(
      `Select * from customer WHERE googleId=${profile.id}`,
      (err, result) => {
        if (result.length == 0) {
          mysqlCon.query(
            "INSERT INTO  customer(googleId,name) VALUES (?, ?)",
            [profile.id, profile.displayName],
            (err, result, field) => {
              if ((result.length = 0)) {
                console.log("this is err", err);
              }
              mysqlCon.query(
                `Select * from customer WHERE c_id=${result.insertId}`,
                (err, result) => {
                  done(null, result[0]);
                }
              );
            }
          );
        }
        if (result.length > 0) {
          done(null, result[0]);
        }
      }
    );
  }
);
passport.use(google);
passport.serializeUser(async (customer, done) => {
  done(null, customer.c_id);
});

passport.deserializeUser(async (id, done) => {
  const obj = `Select * from customer WHERE c_id=${id}`;
  await mysqlCon.query(obj, (err, row, fields) => {
    if (!err) {
      done(null, row[0]);
    }
  });
});
