module.exports.getPlace = async function(req, res, next) {
  try {
    // get assigned orders
    const place = [
      {
        _id: "3232323",
        title: "title 1",
        city: "Ankara",
        owner_id: "343434"
      }
    ];
    // await courierService.getCourier(req.body);
    return await res.json({
      success: true,
      status: 201,
      data: place
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
