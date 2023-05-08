const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
 try {
  const user = await User.findByPk(req.session.user_id);

  res.render('profile', { user, logged_in: req.session.logged_in });
 } catch (err) {
  res.redirect('login');
  // console.log(err);
 }
});

router.put('/:id', async (req, res) => {
 try {
  const user = await User.findByPk(req.params.id);

  res.render('profile', {
   user,
   logged_in: req.session.logged_in,
  });
 } catch (err) {
  res.redirect('login');
 }
});

module.exports = router;
