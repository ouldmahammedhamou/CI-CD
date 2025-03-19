const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Bienvenue sur notre application CI/CD!');
});

app.listen(port, () => {
  console.log(`Application démarrée sur le port ${port}`);
}); 