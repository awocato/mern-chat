import mongooose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongooose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }};

  export default connectToMongoDB;