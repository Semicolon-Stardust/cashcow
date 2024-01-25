const express = require("express");
const { 
    getAllFamilys, 
    getSingleFamily, 
    createFamily, 
    updateFamily, 
    deleteFamily 
} = require("../controllers/familyController");
const {isUserAuthenticated, authorizeRoles} = require("../middleware/auth");


const router = express.Router();


router.route("/familys").get(isUserAuthenticated, getAllFamilys);
router.route("/new").post(isUserAuthenticated, createFamily);
router.route("/:id")
    .put(isUserAuthenticated, updateFamily)
    .delete(isUserAuthenticated, deleteFamily)
    .get(getSingleFamily);


module.exports = router;