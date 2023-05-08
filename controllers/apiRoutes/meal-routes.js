const router = require('express').Router();
const { Meal } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
 const { body } = req;
 try {
  const newMeal = await Meal.create({
   ...body,
   user_id: req.session.user_id,
   new: true,
  });
  await newMeal.save();
  await newMeal.reload();
 } catch (err) {
  res.status(500).json(err);
 }
});

router.put('/:id', withAuth, async (req, res) => {
 try {
  const [affectedRows] = await Meal.update(req.body, {
   where: {
    id: req.params.id,
   },
  });

  if (affectedRows > 0) {
   await Meal.save();

   res.status(200).end();
  } else {
   res.status(404).end();
  }
 } catch (err) {
  res.status(500).json(err);
 }
});

router.delete('/:id', withAuth, async (req, res) => {
 try {
  const [affectedRows] = Meal.destroy({
   where: {
    id: req.params.id,
   },
  });

  if (affectedRows > 0) {
   res.status(200).end();
  } else {
   res.status(404).end();
  }
 } catch (err) {
  res.status(500).json(err);
 }
});

// router.get('/', async (req, res) => {
//  try {
//   const mealData = await Meal.findAll({
//    where: {
//     user_id: req.session.user_id,
//    },
//   });
//   const meals = mealData.map((meal) => meal.get({ plain: true }));
//   const result = meals.reduce((acc, meal) => {
//    const { date } = meal;
//    if (!acc[date]) {
//     acc[date] = [];
//    }
//    acc[date].push(meal);
//    return acc;
//   }, {});
//   res.json(result);
//  } catch (error) {
//   res.status(500).json(error);
//  }
// });

module.exports = router;
