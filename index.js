var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));
var {sess, middle} = require('./session.js');
app.use(sess);
app.use(middle);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/muave', (req, res) => {
  if(req.session.daMuaVe){
    return res.redirect('/vaorap');
  }
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
