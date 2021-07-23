import mongoose from "mongoose";

async function connect() {
  try {
    const uri =
      "mongodb+srv://andrealves:Salmos2504@cluster0.ykvuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    return await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (err) {
    throw err;
  }
}

export { connect };
