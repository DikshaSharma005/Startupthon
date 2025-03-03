import { User } from "../models/User.model.js";

const generateAccess = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = await user.generateAccessToken();

    await user.save({ validateBeforeSave: false });

    return { accessToken };
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while generating Access Token",
    });
  }
};

export const signupSystem = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (name === "" || email === "" || password === "") {
      return res.status(401).json({
        success: false,
        message: "All fields required",
      });
    }

    const isUserPresent = await User.findOne({ email });

    if (isUserPresent) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    await User.create({
      email,
      name,
      password,
    });

    return res.status(200).json({
      success: true,
      message: "User Created!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while signup",
    });
  }
};

export const loginSystem = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === "" || password === "") {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(404).json({
        sucess: false,
        message: "Password incorrect",
      });
    }

    const { accessToken } = await generateAccess(user._id);

    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", options)
      .json({
        sucess: true,
        message: "Login!!",
        user: loggedInUser,
        accessToken,
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while login",
    });
  }
};
