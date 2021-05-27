const router = require('express').Router();

const poRoutes = require('./po-routes');
const userRoutes = require('./user-routes');

router.use('/po',poRoutes);
router.use('/user',userRoutes);

module.exports = router;