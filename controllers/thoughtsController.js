const { User, Thought } = require("../models");

const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thought = await Thought.findById(thoughtId);
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createThought = async (req, res) => {
  try {
    const { body } = req;
    const thought = await Thought.create(body);
    await User.findOneAndUpdate(
      { username: body.username },
      {
        $push: { thoughts: thought._id },
      }
    );
    res.status(200).json(thought);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const updateThought = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const { body } = req;
    const thought = await Thought.findByIdAndUpdate(thoughtId, body);
    res.status(200).json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteThought = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thought = await Thought.findByIdAndDelete(thoughtId);
    await User.findOneAndUpdate(
      { username: thought.username },
      { $pull: { thoughts: thought._id } }
    );
    res.status(200).json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
};

const addReaction = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const { body } = req;
    const thought = await Thought.findByIdAndUpdate(thoughtId, {
      $push: { reactions: body },
    });
    res.status(200).json(thought);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const deleteReaction = async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;
    const thought = await Thought.findByIdAndUpdate(thoughtId, {
      $pull: { reactions: { reactionId } },
    });
    res.status(200).json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
};
