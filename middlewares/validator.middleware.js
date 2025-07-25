const { taskSchema } = require('../utils/validator');

exports.validateTask = (req, res, next) => {
  try {
    taskSchema.parse(req.body);
    next();
  } catch (e) {
    res.status(400).json({ errors: e.errors });
  }
};
