var express = require('express');
var session = require('express-session');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));

app.use(session({
  secret: 'j^gYTF^3278O((7))',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 3000}
}));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/muave', (req, res) => {
  req.session.daMuaVe = 1;
  res.send('Ban da mua ve');
});

app.get('/vaorap', (req, res) => {
  if(req.session.daMuaVe){
    req.session.daMuaVe++;
    return res.send('Welcome');
  }
  res.send('Ban hay di mua ve');
});
