const { body, validationResult } = require('express-validator');

const validateMovies = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 255 })
    .withMessage('Title should not exceed 255 characters'),
  body('director')
    .notEmpty()
    .withMessage('Director is required'),
  body('year')
    .notEmpty()
    .withMessage('Year is required')
    .isInt({ min: 1888 }) // Let's consider 1888 as the year when the first movie was made
    .withMessage('Year should be a valid year'),
  body('color')
    .notEmpty()
    .withMessage('Color is required')
    .isBoolean()
    .withMessage('Color should be boolean (true for color, false for black and white)'),
  body('duration')
    .notEmpty()
    .withMessage('Duration is required')
    .isInt({ min: 1 })
    .withMessage('Duration should be a valid number of minutes'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ validationErrors: errors.array() });
    }
    next();
  },
];

module.exports = validateMovies;