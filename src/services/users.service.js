
import Users from '../models/users.model.js';

const signInUser = async (userRequest) => {
  let user = await Users.findOneAndUpdate({ email: userRequest.email }, userRequest);
  if(!user) {
    user = new Users(userRequest);
    user = await user.save();
  }
  return user;
};

const findUser = async (email) => {
  const user = await Users.findOne({ email });
  return user;
};

export {
  signInUser,
  findUser,
}
