const { body, validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

exports.createUserValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('The email is invalid'),
  body('password')
    .notEmpty()
    .withMessage('The password is required')
    .isLength({ min: 6 })
    .withMessage('Password must have a least 6 characters')
    .matches(/[a-zA-Z]/)
    .withMessage('Password must have contain a least one letter'),
  validateFields,
];

exports.updateUserValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('The email is invalid'),
  validateFields,
];

exports.loginUserValidation = [
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email must be a correct format'),
  body('password')
    .notEmpty()
    .withMessage('The password is required')
    .isLength({ min: 6 })
    .withMessage('Password must have a least 6 characters')
    .matches(/[a-zA-Z]/)
    .withMessage('Password must have contain a least one letter'),
  validateFields,
];

exports.createRepairValidation = [
  body('date').notEmpty().withMessage('Date us required'),
  body('motorsNumber').notEmpty().withMessage('Motors Number is required'),
  body('description').notEmpty().withMessage('Description is required'),
];
