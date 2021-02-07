const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, PartsHouse, Record, Part } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username').not().isEmail().withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

router.get("/", async(req, res, next) => {
  try {
      const users = await User.findAll();
      res.json({users: users})
  } catch (e) {
      next(e)
  }
})

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);


// Get ALL PartsHouses w/ Records associated
router.get("/:userId/partshouses", asyncHandler(async(req, res) => {
  const { userId } = req.params;

  const partshouses = await PartsHouse.findAll({
    where: { userId: userId },
    include: Record,
  })
  res.json({ partshouses })
}));


// Get All Records w/ Parts associated
router.get("/:userId/partshouses/:partshouseId/records", asyncHandler(async(req, res) => {
  const { partshouseId } = req.params;

  const records = await Record.findAll({
    where: { partsHouseId: partshouseId },
    include: Part,
  })
  res.json({ records })
}))



// //Get All Parts for One Record
// router.get("/:userId/partshouses/:partshouseId/records:recordsId")


module.exports = router;
