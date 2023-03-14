/* eslint-disable no-undef */
import { Router } from "express";
var router = Router();

/* GET Contact listing. */
router.get("./contact", function(req, res, next) {
  res.render("contact", { 
    title: "User List ", 
    author: "George Zappa",
    currentYear: "2023" });
  next();
});

export default router;
