const adminM = require("../models/AdminModel");
class AdminController {
  //
  async register(req, res) {
    //   const { username, password } = req.body;
    //   if (!username || !password)
    //     return res
    //       .status(400)
    //       .json({ success: false, message: "missing username and/or password" });
    //   try {
    //     // const user = await adminM.getAllManagers();
    //     const user1 = await adminM.getManagers(username, "username");
    //     if (user1.length > 0)
    //       return res.status(400).json({
    //         success: false,
    //         message: "ACCOUNT ALREADY EXISTS",
    //       });
    //     const user2 = await adminM.addManager(req.body);
    //     res.render("./home", {
    //       title: "trang home",
    //     });
    //   } catch (error) {}
    // }
  }
}

module.exports = new AdminController();
