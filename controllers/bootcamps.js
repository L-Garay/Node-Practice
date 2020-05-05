const Bootcamp = require('../models/Bootcamp');

// GET all bootcamps FROM /api/v1/bootcamps PUBLIC
exports.getBootCamps = async (req, res, next) => {
  try {
    const data = await Bootcamp.find();
    res.status(200).json({ success: true, data: data });
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
    res.status(400).json({ success: false, error: err });
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
exports.updateBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp of id ${req.params.id}` });
};

// Delete a bootcamp FROM /api/v1/bootcamps/:id PUBLIC
exports.deleteBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp of id ${req.params.id}` });
};
