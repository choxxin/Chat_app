import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateTokenandsetcookie from "../utils/generateToken.js";
const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmpassword, gender, avatar } =
      req.body;

    console.log(fullName, username);
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "password doent match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(401).json({ error: "Username already exist" });
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashpassword,
      gender,
      avatar,
    });

    //JWT TOKEN

    await generateTokenandsetcookie(newUser._id, res);

    const response = await newUser.save();

    if (response) {
      console.log("Uploaded on db successfully ");
    }
    if (!response) {
      res.status(501).json(error, "data didn't uploaded on DB");
      console.log("data didn't uploaded on DB");
    }

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      avatar: newUser.avatar,
    });
  } catch (error) {
    res.status(501).json({ error: " signup ", mssg: error });
  }
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    generateTokenandsetcookie(user._id, res);

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
    });
  } catch (error) {
    res.status(501).json({ error: "Error while Logging in " });
  }
};
const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(201).json({ meassage: "Loggoud out successfully " });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export { signup, login, logout };
