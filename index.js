const express = require('express');
const app = express();

app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port http://127.0.0.1:3000/');
});