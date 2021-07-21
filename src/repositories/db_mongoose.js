import mongoose from "mongoose";

async function connect() {
  try {
    const uri =
      "mongodb+srv://andrealves:@@S@lmos2304@@@cluster0.ykvuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    return await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedToplog: true,
    });
  } catch (err) {
    throw err;
  }
}

export { connect };
