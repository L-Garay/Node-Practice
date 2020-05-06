const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// GET all bootcamps FROM /api/v1/bootcamps PUBLIC
exports.getBootCamps = asyncHandler(async (req, res, next) => {
  const data = await Bootcamp.find();
  res.status(200).json({ success: true, count: data.length, data: data });
});

// GET single bootcamp FROM /api/v1/bootcamps/:id PUBLIC
exports.getBootCamp = asyncHandler(async (req, res, next) => {
  const data = await Bootcamp.findById(req.params.id);
  // to catch properly formatted id's but ones that don't exists
  if (!data) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}.`, 404)
    );
  }
  res.status(200).json({ success: true, data: data });
});

// CREATE new bootcamp FROM /api/v1/bootcamps PUBLIC
exports.createBootCamp = asyncHandler(async (req, res, next) => {
  const data = await Bootcamp.create(req.body);
  res.status(201).json({ success: true, data: data });
});

// UPDATE a bootcamp FROM /api/v1/bootcamps/:id PUBLIC
exports.updateBootCamp = asyncHandler(async (req, res, next) => {
  const data = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  // to catch properly formatted id's but ones that don't exists
  if (!data) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}.`, 404)
    );
  }
  res.status(200).json({ success: true, data: data });
});

// Delete a bootcamp FROM /api/v1/bootcamps/:id PUBLIC
exports.deleteBootCamp = asyncHandler(async (req, res, next) => {
  const data = await Bootcamp.findByIdAndDelete(req.params.id);
  // to catch properly formatted id's but ones that don't exists
  if (!data) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}.`, 404)
    );
  }
  res
    .status(200)
    .json({ success: true, msg: `Deleted bootcamp of id ${req.params.id}` });
});
