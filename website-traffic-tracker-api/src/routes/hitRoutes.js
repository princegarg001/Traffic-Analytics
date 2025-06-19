const express = require('express');
const hitController = require('../controllers/hitController');

module.exports = (io) => {
  const router = express.Router();
  router.post('/', hitController.logHit(io));
  return router;
};