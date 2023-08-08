const express = require('express');
const router = express.Router();

const userMiddleware = require('../middlewares/user.middleware');
const repairMiddleware = require('../middlewares/repair.middleware');
const validationMiddleware = require('../middlewares/validations.middleware');

const repairController = require('./../controllers/repair.controller');

router
  .route('/')
  .get(
    userMiddleware.protect,
    userMiddleware.restricTo('employee'),
    repairController.findAllMotorcycles
  )
  .post(
    validationMiddleware.createRepairValidation,
    repairController.createOneMotorcycle
  );

router
  .use('/:id', userMiddleware.protect)
  .route('/:id')
  .get(
    repairMiddleware.validRepair,
    userMiddleware.restricTo('employee'),
    repairController.findOneMotorcycle
  )
  .patch(
    repairMiddleware.validRepair,
    userMiddleware.restricTo('employee'),
    repairController.updateMotorcycle
  )
  .delete(
    repairMiddleware.validRepair,
    userMiddleware.restricTo('employee'),
    repairController.deleteMotorcycle
  );

module.exports = router;
