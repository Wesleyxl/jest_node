const bcrypt = require("bcryptjs");
const User = require("../model/User");

const createUserToken = require("../../helper/createUserToken");

const loginService = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return {
      success: false,
      error: "Invalid email or password",
    };
  }
  const isCorrectPassword = await bcrypt.compare(password, user.password);
  if (!isCorrectPassword) {
    return {
      success: false,
      error: "Invalid email or password",
    };
  }

  return {
    success: true,
    data: createUserToken(user.id),
  };
};

module.exports = { loginService };
