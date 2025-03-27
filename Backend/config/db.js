import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://bite2eat:7977545@cluster0.55aza.mongodb.net/?")
    .then(() => {
      console.log("DB Connected");
    });
};
