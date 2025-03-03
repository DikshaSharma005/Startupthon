import { Subscriber } from "../models/Subscribers.model.js";

export const addEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (email === "") {
      return res.status(400).json({
        success: false,
        message: "email required",
      });
    }

    await Subscriber.create({
      email,
    });

    return res.status(200).json({
      success: true,
      message: "Email send to admin",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while adding Email",
    });
  }
};

export const fetchAllEmail = async (req, res) => {
  try {
    const response = await Subscriber.find();

    return res.status(200).json({
      success: true,
      message: "Fetch all emails",
      email: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetch all emails",
    });
  }
};

export const deleteEmailByAdmin = async (req, res) => {
  try {
    const { subscriberId } = req.body;

    if (!subscriberId) {
      return res.status(400).json({
        success: false,
        message: "Email Id is required",
      });
    }

    await Subscriber.findByIdAndDelete(subscriberId);

    return res.status(200).json({
      success: true,
      message: "Email deleted!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while deleting email",
    });
  }
};
