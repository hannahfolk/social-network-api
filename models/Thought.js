const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction.js");
const { formatTime } = require("./utils/formatTime");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Thought text is required",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTime,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(() => this.reactions.length);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
