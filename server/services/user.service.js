const { User } = require("../models");
const mongoose = require("mongoose");

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  return await User.find();
};

const updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(
    new mongoose.Types.ObjectId(id),
    updateData,
    {
      new: true,
    }
  );
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
