const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myweb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((val) => {
        console.log("connection success");
    })
    .catch((err) => {
        console.log(err);
    })

const userScema = new mongoose.Schema({
    user: {
        type: String,
        require,
    },
    city: {
        type: String,
        require,
        default: "jalor"
    },
    email: {
        type: String,
        require,
    },
    pwd: {
        type: String,
        require,
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const DBModuls = new mongoose.model("emp", userScema)

module.exports(DBModuls)
