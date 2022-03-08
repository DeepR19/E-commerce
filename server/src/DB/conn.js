const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: "./.env"})
const DB = process.env.DB;

mongoose.connect(DB,
    {   useNewUrlParser: true ,
        useUnifiedTopology: true ,
        useCreateIndex: true ,
        useFindAndModify: false
    }).then(() => {
        console.log("MongoDB Done");
    }).catch((e) => {
        console.log(e);
    });









// const dataSchema = mongoose.Schema({
//     title: {
//         type: String,
//         require: (true, "Please give a title to identify")
//     }
// });

// const data = mongoose.model("Object", dataSchema);

// module.exports = data;