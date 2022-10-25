const express = require("express");
const router = express.Router();
const path = require("path");

// get
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../login.html"));
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../register.html"));
});

router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../dashboard.html"));
});

router.get("/users/:id", (req, res) => {
  res.send(`${req.params.id}`);
});

// post
app.post("/dashboard", (req, res) => {
  console.log(req.body);
  // res.send(`The workout you want to do is: ${req.body.workoutType}` );
});

router.post("/register", (req, res) => {
  const { fname, lname, email, password, cpassword } = req.body;
  let errors = [];

  if (!fname || !lname || !email || !password || !cpassword) {
    errors.push({ msg: "Please fill all fields!" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (password !== cpassword) {
    errors.push({ msg: "Passwords don't match!" });
  }

  if (errors.length > 0) {
    console.log("error");
    res.sendFile(path.join(__dirname, "../register.html"), (errors) => {
      errors.forEach(function (error) {
        const errorSpace = document.createElement("div");
        errorSpace.classList.add(
          "alert",
          "alert-warning",
          "alert-dismissible",
          "fade",
          "show"
        );
        errorSpace.setAttribute("role", "alert");
        const errorLine = document.querySelector(".alert-dismissible");
        errorLine.textContent(error.msg);
      });
    });
  }
});

module.exports = router;
