const { Airports } = require('../models');


const getLocations = async (req, res) => {
  try {
    const locations = await Airports.findAll();
    res.status(200).json({ locations });
  }
  catch (err) {
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
};


module.exports = {
  getLocations
};
