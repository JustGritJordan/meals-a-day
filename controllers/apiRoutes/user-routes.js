const router = require('express').Router();
const { User } = require('../../models');

router.post('/register', async (req, res) => {
 try {
  const user = await User.create(req.body);

  req.session.save(() => {
   req.session.user_id = user.id;
   req.session.logged_in = true;

   res.status(200).json(user);
  });
 } catch (err) {
  res.status(500).json(err);
 }
});

router.post('/login', async (req, res) => {
 try {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
   res.status(400).json({ message: 'No user account found!' });
   return;
  }

  const validPassword = user.checkPassword(req.body.password);

  if (!validPassword) {
   res.status(400).json({ message: 'No user account found!' });
   return;
  }

  req.session.save(() => {
   req.session.user_id = user.id;
   req.session.email = user.email;
   req.session.logged_in = true;

   res.json({ user, message: 'You are now logged in!' });
  });
 } catch (err) {
  res.status(400).json({ message: 'No user account found!' });
 }
});

router.post('/logout', (req, res) => {
 if (req.session.logged_in) {
  req.session.destroy(() => {
   res.status(204).end();
  });
 } else {
  res.status(404).end();
 }
});

module.exports = router;
