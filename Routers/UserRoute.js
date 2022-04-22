const { userProfile, adminDashboard, followUser, updateProfile, unFollowUser } = require("../Controllers/UserController")
const { protectedRoute, adminOnly } = require("../Helpers/Middleware")
const router = require("express").Router()

// Name:  ProfileRoute
// Method:GET
// Access:Private
router.route("/profile")
    .get(protectedRoute, userProfile)
    .put(protectedRoute, updateProfile)

// Name:  Admin Dashboard
// Method:GET
// Access:Admin Only
router.route("/admin")
    .get(protectedRoute, adminOnly, adminDashboard)

// Name:  User Follow
// Method:post
// Access:User only
router.route("/follow/:id")
    .put(protectedRoute, followUser)

// Name:  User Follow
// Method:post
// Access:User only
router.route("/un_follow/:id")
    .put(protectedRoute, unFollowUser)





module.exports = router