const { FlightData } = require('../models');


const getSearchFlights = async (req, res) => {
  try {
    const { from, to } = req.body;
    const getFlightDetail = await FlightData.findAll({
      where: {
        from: from,
        to: to
      }
    });
    return res.status(200).json({ getFlightDetail });
  }
  catch (error) {
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
};


module.exports = {
  getSearchFlights
};
