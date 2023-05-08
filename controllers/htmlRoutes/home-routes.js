const router = require('express').Router();
const { Meal, User } = require('../../models');

// get all meals for homepage
router.get('/', async (req, res) => {
 try {
  const mealData = await Meal.findAll({
   include: [User],
   returning: true,
  });

  const meals = mealData.map((meal) => meal.get({ plain: true }));

  res.render('home', {
   meals,
   logged_in: req.session.logged_in,
   user: req.session.email,
  });
 } catch (err) {
  res.status(500).json(err);
 }
});

// get single meal
router.get('/meal/:id', async (req, res) => {
 try {
  const mealData = await Meal.findByPk(req.params.id, {
   include: [User],
  });

  if (mealData) {
   const meal = mealData.get({ plain: true });

   res.render('single-meal', { meal });
  } else {
   res.status(404).end();
  }
 } catch (err) {
  res.status(500).json(err);
 }
});

router.get('/login', (req, res) => {
 if (req.session.logged_in) {
  res.redirect('/dashboard');
  return;
 }

 res.render('login');
});

router.get('/register', (req, res) => {
 if (req.session.logged_in) {
  res.redirect('/dashboard');
  return;
 }

 res.render('register');
});

module.exports = router;
