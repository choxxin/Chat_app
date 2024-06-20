import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONOGO_DB_URI);
    console.log(
      `\n  Mongodb is connected || DB HOST${response.connection.host}`
    );
  } catch (error) {
    console.log("Error connecting to the mongoose");
  }
};

export default connectToMongoDB;
