const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/usersController");

// /api/users
router.route("/").get(getAllUsers).get(getUserById).post(createUser);

// /api/users/:userId
router.route("/:userId").put(updateUser).delete(deleteUser);

// /api/users/:userId/friends
router.route("/:userId/friends").post(addFriend);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;
