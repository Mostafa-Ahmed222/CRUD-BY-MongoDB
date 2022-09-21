import userModle from "../../../DB/model/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { firstName, lastName, email, password, cpassword, age } = req.body;
  try {
    if (password === cpassword) {
      const hash = await bcrypt.hash(password, 9);
      const user = await userModle.findOne({ email });
      if (!user) {
        const newUser = new userModle({
          firstName,
          lastName,
          email,
          password: hash,
          age,
        });
        const saveUser = await newUser.save();
        res.json({ message: "Done", userID: saveUser._id });
      } else {
        res.json({ message: "email exist" });
      }
    } else {
      res.json({ message: "password not match with cpassword" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModle.findOne({email})
    if (!user) {
        res.json({message : "in-valid account"})
    } else {
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            res.json({message : "in-valid account"})
        } else {
            res.json({message : "Done", user})
        }
    }
  } catch (error) {
    res.json({message : "catch error", error})
  }
};
