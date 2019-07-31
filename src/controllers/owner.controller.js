const OwnerService = require("../services/owner.service");

// Getting courier
module.exports.getOwner = async function(req, res, next) {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const owner = await OwnerService.getOwner(id);
    return owner;
    
    return await res.json({
      success: true,
      status: 201,
      data: owner
    });
  } catch (error) {
    return res.json({
      success: false,
      status: 400,
      message: "Unable to get owner",
      errorMessage: error.message
    });
  }
};

module.exports.createOwner = async function(req, res, next) {
  try {
    const createdOwner = await OwnerService.createOwner(req.body);

    return res.json({
      success: true,
      status: 201,
      data: createdOwner
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
