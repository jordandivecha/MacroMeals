var exports = module.exports = {};

exports.signup = function(req, res) {

    res.render("signup", {layout: "loggedout" });

};

exports.signin = function(req, res) {

    res.render("signin", { layout: "loggedout" });

};

exports.dashboard = function(req, res) {
    var user = {
      id: res.session.passport.user};
    res.render('dashboard', user );

};

exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/');

    });

};
