const express = require('express');
const router = express.Router();

//Getting stats by ID
router.get('/:id', async (req, res) => {
  const Statistics = res.locals.models.statistics;

  const statistics = await Statistics.findById(req.params.id);
  if (!statistics) res.status(404).send(`Statistics with id ${req.params.id} not found!`);
  res.send(statistics);
});

//Update words learned
router.put('/:id/updateWordsLearned', async (req, res) => {
  const Stats = res.locals.models.statistics;

  let stats;

  let temp = await Stats.findById(req.params.id);

  let value = temp.words_learned + 1;

  stats = await Stats.findByIdAndUpdate(
    req.params.id,
    {
      words_learned: value,
    },
    {
      new: true,
    },
  );

  if (!stats) return res.status(404).send(`Statistics with id ${req.params.id} was not found.`);

  res.send('Words learned changed');
});

//Update quests completed
router.put('/:id/updateQuestsCompleted', async (req, res) => {
  const Stats = res.locals.models.statistics;

  let stats;

  let temp = await Stats.findById(req.params.id);

  let value = temp.quests_completed + 1;

  stats = await Stats.findByIdAndUpdate(
    req.params.id,
    {
      quests_completed: value,
    },
    {
      new: true,
    },
  );

  if (!stats) return res.status(404).send(`Statistics with id ${req.params.id} was not found.`);

  res.send('Quests completed changed');
});

//Update tests passed
router.put('/:id/updateTestsPassed', async (req, res) => {
  const Stats = res.locals.models.statistics;

  let stats;

  let temp = await Stats.findById(req.params.id);

  let value = temp.tests_passed + 1;

  stats = await Stats.findByIdAndUpdate(
    req.params.id,
    {
      tests_passed: value,
    },
    {
      new: true,
    },
  );

  if (!stats) return res.status(404).send(`Statistics with id ${req.params.id} was not found.`);

  res.send('Tests passed changed');
});

//Update streak
router.put('/:id/updateStreak', async (req, res) => {
  const Stats = res.locals.models.statistics;

  let stats;

  let temp = await Stats.findById(req.params.id);

  let value = temp.streak + 1;

  stats = await Stats.findByIdAndUpdate(
    req.params.id,
    {
      streak: value,
    },
    {
      new: true,
    },
  );

  if (!stats) return res.status(404).send(`Statistics with id ${req.params.id} was not found.`);

  res.send('Streak changed');
});

//Reset streak
router.put('/:id/resetStreak', async (req, res) => {
  const Stats = res.locals.models.statistics;

  let stats;

  stats = await Stats.findByIdAndUpdate(
    req.params.id,
    {
      streak: 0,
    },
    {
      new: true,
    },
  );

  if (!stats) return res.status(404).send(`Statistics with id ${req.params.id} was not found.`);

  res.send('Streak reseted');
});

module.exports = router;
