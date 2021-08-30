const mongoose = require("mongoose");
const { core_team } = require("../Database/models/CoreUser.js");
module.exports = {
  add: async (data) => {
    try {
      let user = await core_team.findOne({ email: data.email });
      if (user) {
        return { response: "User already exists" };
      } else {
        const newuser = new core_team({
          _id: mongoose.Types.ObjectId(),
          name: data.name,
          email: data.email,
          password: data.password,
          current_year: data.current_year,
        });
        await newuser.save().then((r) => console.log(r));
        return { response: "New user added", user_obj: user };
      }
    } catch (error) {
      console.log(error);
      return { response: "Something went wrong" };
    }
  },
};
