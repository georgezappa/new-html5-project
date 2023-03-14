import { Router } from "express";
const router = Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { 
    title: "My Html5 Project", 
    author: "George Zappa",
    currentYear: "2023" });
  next();
});

router.get("/index", function(req, res, next) {
  res.render("index", { 
    title: "My Express Project", 
    author: "George Zappa",
    currentYear: "2023" });
  next();
});

export default router;
