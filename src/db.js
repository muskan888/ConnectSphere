const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://project783897:Project%40123@cluster0.k8eg9.mongodb.net/test", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    auto_reconnect:true
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch(error => {
    console.log("Failed to connect to database!!!");
    console.log(error);
  });
