const router = require('express').Router();
const { Meal } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
 try {
  const mealData = await Meal.findAll({
   where: {
    user_id: req.session.user_id,
   },
   sort: [['date', 'DESC']],
  });

  const meals = mealData.map((meal) => meal.get({ plain: true }));
  const results = meals.reduce((acc, meal) => {
   const { date } = meal;
   if (!acc[date]) {
    acc[date] = [];
   }
   acc[date].push(meal);
   return acc;
  }, {});
  console.log(results);
  res.render('dashboard', { results, logged_in: req.session.logged_in });
 } catch (err) {
  res.redirect('login');
 }
});

router.get('/:id', async (req, res) => {
 try {
  const mealData = await Meal.findByPk(req.params.id);

  if (mealData) {
   const meal = mealData.get({ plain: true });

   res.render('dashboard', {
    meal,
    logged_in: req.session.logged_in,
   });
  } else {
   res.status(404).end();
  }
 } catch (err) {
  res.redirect('login');
 }
});

module.exports = router;
