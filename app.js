const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {title: 'Hello from EJS', list:['a', 'b', 'c', 'd']});
});

app.get('/books', (req, res) => {
  res.send('hello books');
});

app.listen(port, (err) => {
  console.log(`running server on port: ${port}`);
});