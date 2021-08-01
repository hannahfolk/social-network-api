const formatTime = (createdAt) => {
  createdAt = `${createdAt.toDateString()} at ${createdAt.toLocaleTimeString()}`;
  return createdAt;
};

module.exports = {
  formatTime,
};
