import express from "express";

export const choresRouter = express.Router();

// middleware that is specific to this router
choresRouter.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// define the home page route
choresRouter.get("/", (req, res) => {
  res.send("Chores home page");
});

// define the about route
choresRouter.get("/about", (req, res) => {
  res.send("About chores");
});
