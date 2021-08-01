const mongoose = require("mongoose");
const { User, Thought } = require("../models");

mongoose.connect("mongodb://localhost/social-network", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const userSeed = [
  {
    username: "jeffwingerisawesome",
    email: "jeffwinger@greendale.edu",
  },
  {
    username: "abedlovestroy",
    email: "abednadir@greendale.edu",
  },
  {
    username: "annieedison",
    email: "annieedison@greendale.edu",
  },
  {
    username: "britta",
    email: "brittaperry@greendale.edu",
  },
];

const thoughtSeed = [
  {
    thoughtText: "I'm the best.",
    username: "jeffwingerisawesome",
  },
  {
    thoughtText: "I'm awesome.",
    username: "jeffwingerisawesome",
  },
  {
    thoughtText: "Troy and Abed in the mo-oooorning!",
    username: "abedlovestroy",
  },
  {
    thoughtText: "We can do this guys!",
    username: "annieedison",
  },
  {
    thoughtText: "Down with government!",
    username: "britta",
  },
];

const emptyDB = async () => {
  await User.deleteMany();
  await Thought.deleteMany();
  seedDB();
};

const seedDB = async () => {
  await User.insertMany(userSeed);
  console.log(`${userSeed.length} users inserted!`);
  await Thought.insertMany(thoughtSeed);
  console.log(`${thoughtSeed.length} thoughts inserted!`);
};

emptyDB();
