const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 80


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

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

app.post('/login', (req, res) => {
    const { user, pwd } = req.body
    const findFun = async () => {
        const result = await DBModuls.findOne({ user: user })
        if (result) {
            if (result.pwd === pwd) {
                res.send({
                    logc: true,
                    msg: "Welcome to iTrust",
                    userinfo: result
                })
            }
            else {
                res.send({
                    logc: false,
                    msg: "password doesn't match",
                })
            }
        }
        else {
            res.send({
                logc: false,
                msg: "Username not Exsist please try again...",
            })
        }
    }
    findFun()
})

app.post('/logup', (req, res) => {
    const { user, pwd, email, city } = req.body
    const select = DBModuls.findOne({ user: user }, (err, result) => {
        if (result) {
            res.send({
                logc: false,
                msg: "Username or Email Id Already Exists...",
            })
        }
        else {
            const Data = new DBModuls({
                user, pwd, email, city
            })
            const insetFun = async () => {
                try {
                    await Data.save((errVal, result) => {
                        console.log(result);
                        if (!errVal) {
                            res.send({
                                logc: true,
                                msg: "Register Successfully...",
                                userinfo: result
                            })
                        }
                    })

                } catch (error) {
                    console.log(error);
                }
            }
            insetFun()
        }
    })

})
app.listen(port, () => {
    console.log(`click here - http://localhost:${port}`);
})