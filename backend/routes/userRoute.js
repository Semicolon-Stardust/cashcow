const express = require("express");
const { 
    registerUser, 
    loginUser, 
    logoutUser, 
    forgotPassword, 
    resetPassword, 
    getUserDetails,
    updateUserPassword,
    updateUserProfile,
    getAllUsers,
    getOneUser
} = require("../controllers/userController");
const { isUserAuthenticated, authorizeRoles } = require("../middleware/auth");

const router = new express.Router();

// User Authentication Routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword)

// User CRUD
router.route("/me").get(isUserAuthenticated, getUserDetails)
router.route("/password/update").put(isUserAuthenticated, updateUserPassword)
router.route("/me/update").put(isUserAuthenticated, updateUserProfile)

// Admin CRUD
router.route("/admin/users").get(isUserAuthenticated, authorizeRoles("admin"), getAllUsers);
router.route("/admin/user/:id").get(isUserAuthenticated, authorizeRoles("admin"), getOneUser);

module.exports = router;