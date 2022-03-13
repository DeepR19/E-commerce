var GoogleStrategy = require('passport-google-oauth20').Strategy;
var GithubStrategy = require('passport-github2').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "42661653435-78paroq5i2rqtb1chtv3jumeoaa7a72u.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "27a52e63f354ab6c68ee";
const GITHUB_CLIENT_SECRET = "65cae03cb46c0ac6c946b097c9491fa3f79bb633";

passport.use(
  new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  }
));



passport.use(
  new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  }
));


passport.serializeUser((user, cb)=>{
    cb(null, user)
});
passport.deserializeUser((user, cb)=>{
    cb(null, user)
});