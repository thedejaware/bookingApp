const TenantService = require("../services/tenant.servce");

// Getting courier
module.exports.getPlaceTenants = async function(req, res, next) {
  try {
    // get assigned orders
    // let couier = await courierService.getCourier(req.body);
    const tenants = [
      {
        name: "Kiracı 1",
        surname: "S Kiracı 1"
      },
      {
        name: "Kiracı 2",
        surname: "S Kiracı 2"
      }
    ];
    return await res.json({
      success: true,
      status: 201,
      data: tenants
    });
  } catch (error) {
    return res.json({
      success: false,
      status: 400,
      message: "Unable to get couier",
      errorMessage: error.message
    });
  }
};

module.exports.getTenant = async function(req, res, next) {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const tenant = await TenantService.getTenant(id);
    return tenant;
    
    return await res.json({
      success: true,
      status: 201,
      data: tenant
    });
  } catch (error) {
    return res.json({
      success: false,
      status: 400,
      message: "Unable to get couier",
      errorMessage: error.message
    });
  }
};

module.exports.createTenant = async function(req, res, next) {
  try {
    const createdTenant = await TenantService.createTenant(req.body);

    return res.json({
      success: true,
      status: 201,
      data: createdTenant
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
