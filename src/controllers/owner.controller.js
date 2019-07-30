// Getting courier
module.exports.getOwner = async function(req, res, next) {
    try {
        // get assigned orders
        // let couier = await courierService.getCourier(req.body);
        const owner = 'Mehmet Akın';

        return await res.json({
            success: true,
            status: 201,
            data: owner
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