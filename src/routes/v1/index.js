const express = require('express');

const formRoutes = require('./form-routes');


const router = express.Router();

router.use('/form', formRoutes);

module.exports = router;