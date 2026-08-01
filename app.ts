// const express= require("express");
import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.listen(8080, () => {
  console.log(`my app is running on port: ${PORT}`);
});
