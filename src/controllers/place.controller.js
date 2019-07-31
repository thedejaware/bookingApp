const PlaceService = require("../services/place.service");

module.exports.getPlace = async function(req, res, next) {
  try {
    const id = req.params === undefined ? req.id : req.params.id;

    const place = await PlaceService.getPlace(id);

    return place;
    console.log(place);

    return res.json({
      success: true,
      status: 201,
      data: place
    });
  } catch (error) {
    return res.json({
      success: false,
      status: 400,
      message: "Unable to get place",
      errorMessage: error.message
    });
  }
};

module.exports.createPlace = async function(req, res, next) {
  try {
    const createdPlace = await PlaceService.createPlace(req.body);

    return res.json({
      success: true,
      status: 201,
      data: createdPlace
    });
  } catch (error) {
    return res.json({
      success: false,
      status: 400,
      message: "Unable to create",
      errorMessage: error.message
    });
  }
};

module.exports.getPlaceTenants = async function(req, res, next) {
  try {
    const id = req.params === undefined ? req.id : req.params.id;

    const placeTenants = await PlaceService.getPlaceTenants(id);
    console.log(placeTenants);

    return placeTenants;
  } catch (error) {
    return res.json({
      success: false,
      status: 400,
      message: "Unable to get place",
      errorMessage: error.message
    });
  }
};
