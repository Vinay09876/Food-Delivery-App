import userModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // email already exist or not to login
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    // if user already exist then check for password
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    // if both email and password are matched then generate one token for user
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: "Error" });
  }
};

// generating token for user
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // checking user already exist or not
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists!" });
    }

    // validating email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a correct email id" });
    }

    // validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // encrypting password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ type: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
