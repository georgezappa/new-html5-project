/* eslint-disable no-undef */
import { Router } from "express";
var router = Router();

/* GET users listing. */
router.get("/users", function(req, res, next) {
  res.render("users", { 
    title: "User List ", 
    author: "George Zappa",
    currentYear: "2023" });
  next();
});

export default router;
