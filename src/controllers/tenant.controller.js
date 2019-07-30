// Getting courier
module.exports.getPlaceTenants = async function(req, res, next) {
    try {
        // get assigned orders
        let couier = await courierService.getCourier(req.body);

        return res.json({
            success: true,
            status: 201,
            data: couier
        });

    } catch (error) {
        return res.json({
            success: false,
            status: 400,
            message: 'Unable to get couier',
            errorMessage: error.message
        });
    }
}