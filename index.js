import "core-js";
import express from "express";
//const express = require('express')   //임포트하는 편이 더 세련됨

const app = express()

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);


const handleHome = (req, res) => res.send("hi cool sexy");

const handleProfile = (req, res) => res.send("you are on my sexy cool guy");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)