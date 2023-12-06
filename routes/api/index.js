const router = require('express').Router();
const userroutes = require('./userRoutes');
const thoughtroutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;