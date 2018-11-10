const express = require('express');
const app = express();

// app.use(express.static('dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes')(app);

app.get('/', (req, res) => { res.send('PORT 8080'); });
app.listen(8080, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port 8080!');
});
