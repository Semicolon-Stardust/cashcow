// Creating and Saving Cookie

const sendToken = async function (user, statusCode, res){

    const token = await user.getJWTToken();

    // Cookie Options
    const options = {

        httpOnly: true,
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        secure: false,
    }

    

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    });

} 


module.exports = sendToken;