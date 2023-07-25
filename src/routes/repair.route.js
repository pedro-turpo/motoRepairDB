const express = require('express');
const router = express.Router();

const repairController = require('./../controllers/repair.controller');

router
  .route('/')
  .get(repairController.findAllMotorcycles)
  .post(repairController.createOneMotorcycle);

router
  .route('/:id')
  .get(repairController.findOneMotorcycle)
  .patch(repairController.updateMotorcycle)
  .delete(repairController.deleteMotorcycle);

module.exports = router;
