const express = require('express');
const { getViews, getTopReferrers } = require('../controllers/statsController');
const router = express.Router();
router.get('/views', getViews);
router.get('/referrers', getTopReferrers);
module.exports = router;