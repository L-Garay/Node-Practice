const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');

// GET all bootcamps FROM /api/v1/bootcamps PUBLIC
exports.getBootCamps = async (req, res, next) => {
  try {
    const data = await Bootcamp.find();
    res.status(200).json({ success: true, count: data.length, data: data });
  } catch (err) {
    next(err);
  }
};

// GET single bootcamp FROM /api/v1/bootcamps/:id PUBLIC
exports.getBootCamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findById(req.params.id);
    // to catch properly formatted id's but ones that don't exists
    if (!data) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of ${req.params.id}.`,
          404
        )
      );
    }
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    next(err);
  }
};

// CREATE new bootcamp FROM /api/v1/bootcamps PUBLIC
exports.createBootCamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: data });
  } catch (err) {
    next(err);
  }
};

// UPDATE a bootcamp FROM /api/v1/bootcamps/:id PUBLIC
exports.updateBootCamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // to catch properly formatted id's but ones that don't exists
    if (!data) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of ${req.params.id}.`,
          404
        )
      );
    }
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    next(err);
  }
};

// Delete a bootcamp FROM /api/v1/bootcamps/:id PUBLIC
exports.deleteBootCamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findByIdAndDelete(req.params.id);
    // to catch properly formatted id's but ones that don't exists
    if (!data) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of ${req.params.id}.`,
          404
        )
      );
    }
    res
      .status(200)
      .json({ success: true, msg: `Deleted bootcamp of id ${req.params.id}` });
  } catch (err) {
    next(err);
  }
};
