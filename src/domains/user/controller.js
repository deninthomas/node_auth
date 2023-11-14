const User = require("./model");
const { hashData,verifyHashedData } = require("../util/hashData");
const createToken = require("../util/createToken");


const authenticateUser = async(data) =>{
try{
    
  const {email , password} = data;

  const fetchedUser = await User.findOne({email});
  if(!fetchedUser){
    throw  Error('Invalid email');
     }
     // compare the user entered password with the stored one in database

     const hashedPassword = fetchedUser.password;
     const passwordMatch = await verifyHashedData(password,hashedPassword);
      

     if (!passwordMatch) {
      throw  Error('Incorrect Password');
     }

     // create user token
     const tokenData = { userdID: fetchedUser._id,email};
     const token = await createToken(tokenData);

     //assign user token
     fetchedUser.token=token;
     return fetchedUser;

    }
  
    catch(error){
          throw error;
  }

}


const createNewUser = async (data) => {
  try {
    const { name, email, password } = data;
    // Checking If user Already Exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw Error("User with the provided Email already exists");
    }

    // hash password
    const hashedPassword = await hashData(password);
    // Create new user
    const newUser = new User({ name, email, password:hashedPassword });

    // save user
    const createdUser = await newUser.save();
    return createdUser;
  } catch (error) {
    throw error;
  }
};

module.exports = { createNewUser ,authenticateUser };
