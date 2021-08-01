const { Schema, Types } = require("mongoose");
const { formatTime } = require("../utils/formatTime");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "Reaction body is required",
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTime,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;
