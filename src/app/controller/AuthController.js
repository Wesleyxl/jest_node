const { loginService } = require("../services/authService");

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || email === "") {
      return res.status(401).json({
        success: false,
        error: "Email or password field is required",
      });
    }
    if (!password || password === "") {
      return res.status(401).json({
        success: false,
        error: "Email or password field is required",
      });
    }

    const response = await loginService(email, password);

    if (response.success === false) {
      return res.status(401).json({
        success: false,
        error: response.error,
      });
    }

    return res.json({
      success: true,
      access_token: response.data,
    });
  },
};
