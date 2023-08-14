const Repair = require('../models/repair.model');
const User = require('../models/user.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { Op } = require('sequelize');

exports.validRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const repair = await Repair.findOne({
    where: {
      id,
      status: {
        [Op.or]: ['pending', 'completed'],
      },
    },
    include: [
      {
        model: User,
        attributes: ['id', 'name', 'email', 'role', 'status'],
      },
    ],
  });

  if (!repair) {
    return next(new AppError(`Repair with id: ${id} not found`, 404));
  }

  req.repair = repair;
  next();
});
