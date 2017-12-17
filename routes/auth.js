var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

	app.get('/',isLoggedIn, authController.dashboard);

    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: "/dashboard",

            failureRedirect: "/signup"
        }



    ));

    app.post('/signin', passport.authenticate('local-login', {
            successRedirect: "/dashboard",

            failureRedirect: "/signin"

        }));

    app.get('/logout',authController.logout);

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

};
