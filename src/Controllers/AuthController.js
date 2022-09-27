const { render } = require("node-sass");
const adminM = require("../models/AdminModel");

class AuthController {
  // @route get /
  // @desc get home
  // @access Puclic
  async home(req, res) {
    res.render("home", {
      layout: "mainLayout",
    });
  }

  // @route post /
  // @desc get home
  // @access Puclic
  async signUpPage(req, res) {
    console.log("signUp");
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let today = `${year}/${month}/${day}`;
    console.log(today);

    res.render("./Account/userSignUp", {
      layout: "accountLayout",
      title: "Trang Đăng Ký",
    });
  }

  async signInPage(req, res) {
    console.log("signUp");
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let today = `${year}/${month}/${day}`;
    console.log(today);

    res.render("./Account/userSignIn", {
      layout: "accountLayout",
      title: "Trang Đăng Ký",
    });
  }

  async signUp() {
    const { username, password } = req.body;
    if (!username || !password) return res.redirect("/");
    try {
      // const user = await adminM.getAllManagers();
      const user1 = await adminM.getManagers(username, "username");
      if (user1.length > 0)
        return res.status(400).json({
          success: false,
          message: "ACCOUNT ALREADY EXISTS",
        });
      const user2 = await adminM.addManager(req.body);
      console.log(user2);
    } catch (error) {}
  }

  async signIn() {
    const { username, password } = req.body;
    if (!username || !password) return res.redirect("/");
    try {
      // const user = await adminM.getAllManagers();
      const user1 = await adminM.getManagers(username, "username");
      if (user1.length > 0)
        return res.status(400).json({
          success: false,
          message: "ACCOUNT ALREADY EXISTS",
        });
      const user2 = await adminM.addManager(req.body);
      console.log(user2);
    } catch (error) {}
  }
}

module.exports = new AuthController();
