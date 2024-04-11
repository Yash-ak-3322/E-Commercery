import mongoose from "mongoose";

// const configOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://yashakbari0412:123452024@cluster0.uwjqcgg.mongodb.net/";

  try {
    await mongoose
      .connect(connectionUrl)
      .then(() => console.log("Ecommerce database connected successfully!"));
  } catch (error) {
    console.log("Error while connecting database", error.message);
  }
};

export default connectToDB;
