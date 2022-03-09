const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const tokenValidate = require("../middleWare/auth");
//const UserValidate = require("../middleWare/UserValidator");
const authorization = require("../middleWare/auth");

router.post("/createUser", userController.createUser);

router.post("/loginUser", userController.loginUser);

router.get("/getUserData/:userId",tokenValidate.tokenValidator,authorization.aurThorization,userController.getUserData);

router.put("/updateUser/:userId",tokenValidate.tokenValidator,authorization.aurThorization,userController.updateUser);

router.delete("/deleteUser/:userId",tokenValidate.tokenValidator,authorization.aurThorization,userController.deleteData);

router.post("/users/:userId/posts",tokenValidate.tokenValidator,authorization.aurThorization, userController.createPost)

module.exports = router;