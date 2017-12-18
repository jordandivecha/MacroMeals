var exports = module.exports = {};

exports.signup = function(req, res) {

    res.render("signup", {layout: "loggedout" });

};

exports.signin = function(req, res) {

    res.render("signin", { layout: "loggedout" });

};

exports.dashboard = function(req, res) {
    var user = res.session.passport.user;
    db.user.findAll({

    }).then(function (err, res){
      console.log(res);
      res.render('dashboard', {user: res});
    });


};

exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/');

    });

};
