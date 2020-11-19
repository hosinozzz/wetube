const express = require('express')
const app = express()

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
    res.send("hi cool sexy");
}

function handleProfile(req, res) {
    res.send("you are on my sexy cool guy")
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)