const Place = require("../models/place");

module.exports.createPlace = async function(paramPlace) {
  const newPlace = new Place(paramPlace);

  return await newPlace.save();
};

module.exports.getPlace = async function(id) {
  const place = await Place.findById(id);
  return place;
};

module.exports.getPlaceTenants = async function(id) {
  const tenants = await Place.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(id)
      }
    },
    {
      $lookup: {
        from: "tenants",
        localField: "tenantId",
        foreignField: "_id",
        as: "tenantsData"
      }
    }
  ]);
  return tenants;
};

module.exports.getPlaces = async function() {
  const places = await Place.find();
  return places;
}
