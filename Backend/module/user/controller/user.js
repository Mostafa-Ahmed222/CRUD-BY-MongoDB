import userModle from "../../../DB/model/User.js";

export const updateUserById = async (req, res) => {
  //   const { firstName, lastName, age } = req.body;
  const { id } = req.params;
  try {
    const user = await userModle.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (user) {
      res.json({ message: "Done", user });
    } else {
      res.json({ message: "Wrong ID" }, user);
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const updateMeny = async (req, res) => {
  try {
    const users = await userModle.updateMany({ age: { $gt: 25 } }, req.body);
    if (users.matchedCount) {
      res.json({ message: "Done", users });
    } else {
      res.json({ message: "invalid data" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModle.findByIdAndDelete(id);
    if (user) {
      res.json({ message: "Done", user });
    } else {
      res.json({ message: "in-valid account" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const deleteMeny = async (req, res) => {
  try {
    const users = await userModle.deleteMany();
    if (users.deletedCount) {
      res.json({ message: "Done", users });
    } else {
      res.json({ message: "invalid Data", users });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModle.findById(id);
    if (user) {
      res.json({ message: "Done", user });
    } else {
      res.json({ message: "Wrong ID" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const getAllUsersWitha = async (req, res) => {
  try {
    const users = await userModle.find({
      $or: [{ firstName: /a/ }, { lastName: /a/ }],
    });
    if (users.length) {
        res.json({ message: "Done", users });
    } else {
        res.json({ message: "User Not Found"});
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const getuserswithsubstr = async (req, res) => {
  try {
    const users = await userModle.find({ firstName: /hme/ });
    if (users.length) {
        res.json({ message: "Done", users });
    } else {
        res.json({ message: "User Not Found"});
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const getUsersGreater = async (req, res) => {
  try {
    const users = await userModle.find({
      $and: [{ firstName: /a$/ }, {age : {$gte : 20}}],
    });
    if (users.length) {
        res.json({ message: "Done", users });
    } else {
        res.json({ message: "User Not Found"});
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const getUsersless = async (req, res) => {
  try {
    const users = await userModle.find({
      $and: [{ firstName: /^a/i }, {age : {$lt : 30}}],
    });
    if (users.length) {
        res.json({ message: "Done", users });
    } else {
        res.json({ message: "User Not Found"});
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
