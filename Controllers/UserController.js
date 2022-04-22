const UserModel = require("../Models/UserModel")

// Name:  ProfileRoute
// Method:GET
// Access:Private
const userProfile = async (req, res) => {

    try {
        const findUser = await UserModel.findById(req.user.id).select(' -password -isAdmin')
        if (findUser) {
            res.status(200).send(findUser)
        } else (
            res.status(400).send({ message: "User not found" })
        )
    } catch (error) {
        res.status(500).send(error)
    }
}

// Name:  Admin Dashboard
// Method:GET
// Access:Admin Only
const adminDashboard = (req, res) => {
    res.send(req.user)
}

// Name: Update User
// Method:Put
// Access:private
const updateProfile = async (req, res) => {
    if (req.body.follower || req.body.following) return res.status(400).send({ message: "Wrong Request" })

    try {
        const updateUser = await UserModel.findByIdAndUpdate(req.user.id, {
            $set: req.body
        }, { new: true })
        res.status(200).send({ updateUser, message: "Update Successfully" })
    } catch (error) {
        res.status(500).send(error)
    }
}


// Name:  User Follow
// Method:post
// Access:User only
const followUser = async (req, res) => {

    if (req.user.id === req.params.id) return res.status(400).send({ message: "You can't Follow your self" })

    try {
        const findMe = await UserModel.findById(req.user.id)
        const findUser = await UserModel.findById(req.params.id)

        if (!findUser.follower.includes(req.user.id)) {
            await findMe.updateOne({ $push: { following: req.params.id } })
            await findUser.updateOne({ $push: { follower: req.user.id } })
            res.status(200).send({ message: "Follow " })
        } else {
            res.status(404).send({ message: "Already Followed" })
        }

    } catch (error) {
        res.status(500).send(error)
    }
}


// Name:  User Follow
// Method:post
// Access:User only
const unFollowUser = async (req, res) => {

    try {
        const findMe = await UserModel.findById(req.user.id)
        const findUser = await UserModel.findById(req.params.id)

        if (findUser.follower.includes(req.user.id)) {
            await findMe.updateOne({ $pull: { following: req.params.id } })
            await findUser.updateOne({ $pull: { follower: req.user.id } })
            res.status(200).send({ message: "Unfollow" })
        } else {
            res.status(404).send({ message: "Already Unfollowed" })
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    userProfile,
    adminDashboard,
    followUser,
    updateProfile,
    unFollowUser
}