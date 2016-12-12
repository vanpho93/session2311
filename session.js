var session = require('express-session');
var sess = session({
  secret: 'j^gYTF^3278O((7))',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 3000}
});

var middle = (req, res, next) => {
  if(req.session.daMuaVe || req.path=='/muave'){
    next();
  }else{
    res.render('home');
  }
}

module.exports = {sess, middle};
