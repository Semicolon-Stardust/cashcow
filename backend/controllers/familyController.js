const Family = require('../models/familyModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ApiFeatures = require('../utils/apiFeatures');





// Create new family => /api/v1/family/new 
exports.createFamily = catchAsyncErrors(async (req, res, next) => {

        req.body.admin = req.user.email;
    
        const family = await Family.create(req.body);

        res.status(201).json({
            success: true,
            family
        })


})




exports.updateFamily = catchAsyncErrors( async (req, res, next) => {

    let family = await Family.findById(req.params.id);

    if(!family) {
        return next(new ErrorHandler("Family not found", 404));
    }

    family = await Family.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        family
    })
})




// Delete family => /api/v1/family/:id  
exports.deleteFamily = catchAsyncErrors(async (req, res, next) => {

    const family = await Family.findById(req.params.id);

    if(!family) {
        return next(new ErrorHandler("Family not found", 404));
    }

    await family.remove();

    res.status(200).json({
        success: true,
        message: "Family is deleted"
    })
})





// Fetch single family details => /api/v1/family/:id
exports.getSingleFamily = catchAsyncErrors(async (req, res, next) => {
    
    const family = await Family.findById(req.params.id);

    if(!family) {
        return next(new ErrorHandler("Family not found", 404));
    }

    res.status(200).json({
        success: true,
        family
    })
});




//  Fetch all family details => /api/v1/familys/
exports.getAllFamilys = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 5;
    const familyCount = await Family.countDocuments();
    
    const apiFeature = new ApiFeatures(Family.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    const familys = await apiFeature.query;

    res.status(201).json({
        success: true,
        family: familys,
        familyCount
    })

});