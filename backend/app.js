const express = require('express');
const db = require('./db');
const helmet = require('helmet');
const users = require('./routes/users');
const plants = require('./routes/plants');
const flashsets = require('./routes/flashsets');
const flashcards = require('./routes/flashcards');
const auth = require('./routes/auth');
const quests = require('./routes/quests');
const statistics = require('./routes/statistics');

const main = async () => {
  const app = express();

  const connection = await db.connect();
  const models = db.load(connection);

  //[WARNING] Uncommenting lines below will drop your current database and initialize default one.
  // if (process.env.NODE_ENV === 'dev') {
  //   await connection.dropDatabase();
  //   await db.initialize(models);
  // }

  db.register(app, connection, models);

  //Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  //Routes
  app.use('/api/users', users);
  app.use('/api/plants', plants);
  app.use('/api/flashsets', flashsets);
  app.use('/api/flashcards', flashcards);
  app.use('/api/auth', auth);
  app.use('/api/quests', quests);
  app.use('/api/statistics', statistics);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });

  //const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Listening on port ${port}`));
};

main();
