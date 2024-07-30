const { ClassType, Airports } = require('../models');

const getClassType = async (req, res) => {
  try {
    const classTypes = await ClassType.findAll();
    res.status(200).json({ classTypes });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch class types' });
  }
};



module.exports = {
  getClassType
};
