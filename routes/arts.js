const express = require('express');
const router = express.Router();

const artCtrl = require('../controllers/arts');

router.post('/', artCtrl.addInMuseum);
router.get('/', artCtrl.getMuseum);

module.exports = router;