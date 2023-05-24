const { body, validationResult } = require('express-validator');

const validateUsers = [
  body('firstname')
    .notEmpty()
    .withMessage('First name is required')
    .isLength({ max: 50 })
    .withMessage('First name should not exceed 50 characters'),
  body('lastname')
    .notEmpty()
    .withMessage('Last name is required')
    .isLength({ max: 50 })
    .withMessage('Last name should not exceed 50 characters'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email should be a valid email address'),
  body('city')
    .notEmpty()
    .withMessage('City is required')
    .isLength({ max: 100 })
    .withMessage('City should not exceed 100 characters'),
  body('language')
    .notEmpty()
    .withMessage('Language is required')
    .isLength({ max: 50 })
    .withMessage('Language should not exceed 50 characters'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ validationErrors: errors.array() });
    }
    next();
  },
];

module.exports = validateUsers;