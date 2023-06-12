const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {
  searchQuery,
  searchByQueryOrFields
} = require('./controllers/searchController');
const { getDocument } = require('./controllers/documentsController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('This is a search engine');
});

app.get('/search', searchQuery);

app.get('/documents/:id', getDocument);

app.post('/search', searchByQueryOrFields);

app.listen(port, () => console.log(`Listening on port ${port}`));
