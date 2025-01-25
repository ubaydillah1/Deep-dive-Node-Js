import User from "../src/models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const data = await User.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createNewUser = async (req, res) => {
  try {
    const data = await User.create({
      name: "user2",
      email: "user2@gmail.com",
      age: 10,
    });

    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
