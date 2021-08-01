const { User, Thought } = require("../models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { body } = req;
    const user = await User.findByIdAndUpdate(userId, body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete(userId);
    await Thought.deleteMany({ username: user.username });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

const addFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    const user = await User.findByIdAndUpdate(userId, {
      $push: { friends: friendId },
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    const user = await User.findByIdAndUpdate(userId, {
      $pull: { friends: friendId },
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
