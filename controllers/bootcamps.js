const Bootcamp = require('../models/Bootcamp');

// GET all bootcamps FROM /api/v1/bootcamps PUBLIC
exports.getBootCamps = async (req, res, next) => {
  try {
    const data = await Bootcamp.find();
    res.status(200).json({ success: true, count: data.length, data: data });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};

// GET single bootcamp FROM /api/v1/bootcamps/:id PUBLIC
exports.getBootCamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findById(req.params.id);
    if (!data) {
      return res
        .status(400)
        .json({ success: false, msg: 'Cannot find that id' });
    }
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    // res.status(400).json({ success: false, error: err });
    next(err);
  }
};

// CREATE new bootcamp FROM /api/v1/bootcamps PUBLIC
exports.createBootCamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: data });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};

// UPDATE a bootcamp FROM /api/v1/bootcamps/:id PUBLIC
exports.updateBootCamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res
        .status(400)
        .json({ success: false, msg: 'Cannot find that id' });
    }
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};

// Delete a bootcamp FROM /api/v1/bootcamps/:id PUBLIC
exports.deleteBootCamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!data) {
      return res
        .status(400)
        .json({ success: false, msg: 'Cannot find that id' });
    }
    res
      .status(200)
      .json({ success: true, msg: `Deleted bootcamp of id ${req.params.id}` });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};
