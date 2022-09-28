import mongoose from "mongoose";
const connectDB = async ()=> {
    return await mongoose
    .connect("mongodb://localhost:27017/ass6")
    .then(() => {
      console.log('connectedDB');
    }).catch((err)=> {
      console.log('fail to connectDB', err);
    })
}
export default connectDB