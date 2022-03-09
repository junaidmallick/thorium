const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let username = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: username, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "Please Enter Valid Username or Password",
    });
  let token = jwt.sign({ userId: user._id.toString() }, "Facebook");
  res.send({ status: true, msg: token });
};

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  res.send({ status: true, msg: user });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let data = req.body;
  let UpToDate = await userModel.findByIdAndUpdate(

    { _id: userId },
    { $set: data },
    { new: true }
  );
  res.send({ status: true, msg: "Updated Data" });
};

const deleteData = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId); //find the value that I inserted!
  if (!user) {
    return res.send("Invalid User ID!");
  }
  let changeStatus = await userModel.updateMany({ isDeleted: true });
  res.send({msg:changeStatus});

};


const createPost = async (req, res)=>{
  let message = req.body.message;
  let user = await userModel.findById(req.params.userId);
  let updatedPost = user.posts;
  updatedPost.push(message);
  let updatedUser = await userModel.findOneAndUpdate({_id:user._id},{posts:updatedPost},{new:true});
  res.send({status:true, data:updatedUser});
};
  

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteData = deleteData;
module.exports.createPost = createPost;