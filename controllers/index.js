const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./htmlRoutes/home-routes.js');
const dashboardRoutes = require('./htmlRoutes/dashboard-routes.js');
const profileRoutes = require('./htmlRoutes/profile-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/profile', profileRoutes);
router.use('/api', apiRoutes);

module.exports = router;
