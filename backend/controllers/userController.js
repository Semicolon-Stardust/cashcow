const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/generateJWT");
const sendMail = require("../utils/sendMail");
const crypto = require("crypto");



// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    const {username, email, password, dob, primaryCurrency, ocupation} = req.body;

    const user = await User.create({
        name: username,
        email,
        password,
        dob,
        primaryCurrency,
        ocupation
    }); 

    sendToken(user, 201, res);

})




// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {

    const {email, password} = req.body

    if (!email || !password) return next(new ErrorHandler("Enter Email and Password", 400));

    const user = await User.findOne({email}).select("+password")
    if (!user) return next(new ErrorHandler("Invalid Email or Password", 401));

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) return next(new ErrorHandler("Invalid Email or Password", 401));

    sendToken(user, 200, res);

})





// Logout User
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "logged out successfully !"
    })

})



// Forgot password

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findOne({email: req.body.email});

    if (!user){
        return next(new ErrorHandler("User Not Found !", 404));
    }

    const resetToken = await user.resetPasswordTokenGenerator();

    await user.save({ validateBeforeSave: false })

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const msg = `Here is your reset password link: ${resetPasswordUrl} 
    
    Ignore if you didn't click forgot password !`;

    try{

        await sendMail({
            email: user.email,
            subject: "Ecommerce Password Recovery Email",
            message: msg
        })

        res.status(201).json({
            success: true,
            message: `Email sent to ${user.email} successfully`
        })

    }
    catch (error){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave: false});

        res.status(400).json({
            success: false,
            message: error.message    
        })
    }

})




// Reset Password

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
 
    const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {
            $gt: Date.now()
    }})

    if (!user){
        return next(new ErrorHandler("Password Reset token is Invalid or has been Expired !", 400));
    }

    if (req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Passwords does not match !", 400))
    }

    user.password = req.body.password;
    this.resetPasswordToken = undefined;
    this.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 201, res);


})



// Get User Details

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id);

    res.status(201).json({
        success: true,
        user
    })

})




// Update user password

exports.updateUserPassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched){
        return next(new ErrorHandler("Old Password is Incorrect !", 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler("Passwords didn't match !", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 201, res);
})


// Update User Profile

exports.updateUserProfile = catchAsyncErrors(async (req, res, next) => {
    
        const newUserData = {
            name: req.body.name,
            email: req.body.email
        }

        const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })


        res.status(201).json({
            success: true,
        })
    })







// Get all Users (admin)

exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    
        const users = await User.find();
    
        res.status(201).json({
            success: true,
            users
        })
    
})


// Get Specific User Details (admin)

exports.getOneUser = catchAsyncErrors(async (req, res, next) => {
    
    const users = await User.findById(req.params.id);

    if (!users){
        return next(new ErrorHandler(`User not found with id: ${req.params.id}`));
    }

    res.status(201).json({
        success: true,
        users
    })

})

