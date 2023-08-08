const catchAsync = require('../utils/catchAsync');
const Repair = require('./../models/repair.model');

exports.findAllMotorcycles = catchAsync(async (req, res, next) => {
  const repair = await Repair.findAll({
    where: {
      status: 'pending',
    },
  });

  res.status(200).json({
    status: 'success',
    repair,
  });
});

exports.findOneMotorcycle = catchAsync(async (req, res, next) => {
  const { repair } = req;

  return res.status(200).json({
    status: 'success',
    repair,
  });
});

exports.createOneMotorcycle = catchAsync(async (req, res, next) => {
  const { date, motorsNumber, description, userId } = req.body;

  const repair = await Repair.create({
    date,
    motorsNumber,
    description,
    userId,
  });

  res.status(201).json({
    status: 'success',
    message: 'Repair created successfully!',
    repair,
  });
});

exports.updateMotorcycle = catchAsync(async (req, res, next) => {
  const { repair } = req;

  await repair.update({ status: 'completed' });

  return res.status(200).json({
    status: 'success',
    message: 'Repair updated successfully',
  });
});

exports.deleteMotorcycle = catchAsync(async (req, res, next) => {
  const { repair } = req;

  await repair.update({ status: 'cancelled' });

  return res.status(200).json({
    status: 'success',
    message: 'Repair Deleted successfully',
  });
});
