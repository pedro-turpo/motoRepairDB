const express = require('express');

const userController = require('./../controllers/user.controller');

const userMiddleware = require('../middlewares/user.middleware');
const validationMiddleware = require('../middlewares/validations.middleware');


const router = express.Router();

router
  .route('/')
  .get(
    userMiddleware.protect,
    userMiddleware.restricTo('employee'),
    userController.findAllUsers
  )
  .post(validationMiddleware.createUserValidation, userController.createUser);

router
  .route('/:id')
  .get(
    userMiddleware.protect,
    userMiddleware.restricTo('employee'),
    userMiddleware.validUser,
    userController.findOneUser
  )
  .patch(
    userMiddleware.protect,
    userMiddleware.restricTo('employee', 'client'),
    userMiddleware.validUser,
    validationMiddleware.updateUserValidation,
    userController.updateUser
  )
  .delete(
    userMiddleware.protect,
    userMiddleware.restricTo('employee', 'client'),
    userMiddleware.validUser,
    userController.deleteUser
  );

router
  .route('/login')
  .post(validationMiddleware.loginUserValidation, userController.login);

module.exports = router;
