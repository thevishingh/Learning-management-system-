import User from "../model/userModel.js";

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userID).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not Found",
      });
    }

    return res.status(200).json({
      message: "User Found",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};
