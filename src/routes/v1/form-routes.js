const express = require('express');

const { FormController } = require('../../controllers');

const router = express.Router();

router.post('/', FormController.createForm);
router.get('/', FormController.getForms);
router.get('/:id', FormController.getForm);
router.patch('/:id', FormController.updateForm);
router.delete('/:id', FormController.deleteForm);


module.exports = router;