const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  current_year: {
    type: Number,
  },
  profile_views: {
    type: Number,
    default: 0,
  },
  total_posts: {
    type: Number,
    default: 0,
  },
});
const core_team = mongoose.model("core_team", userSchema);

module.exports = {
  core_team,
};
