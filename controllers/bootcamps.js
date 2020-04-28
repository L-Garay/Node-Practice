// GET all bootcamps FROM /api/v1/bootcamps PUBLIC
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcmaps' });
};

// GET single bootcamp FROM /api/v1/bootcamps/:id PUBLIC
exports.getBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get bootcamp of id ${req.params.id}` });
};

// CREATE new bootcamp FROM /api/v1/bootcamps PUBLIC
exports.createBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' });
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
