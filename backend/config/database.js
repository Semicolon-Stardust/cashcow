const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI)
.then((data) => {
    console.log(`Database connected Successfully to ${data.connection.host}`);
})
}


module.exports = connectDatabase;