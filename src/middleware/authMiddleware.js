// kiem tra xem co asset token trong header ma request gui len khong
// Authorization: Bearer kskbgsgihgihsgnklnklsnvoibafjajk
// => neu co va dung vs token nguoi dung thi gui post
// => neu khong thi khong cho phep di tiep nua

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token", token);
  console.log("authHeader", authHeader);
  console.log("Authorization", req.header("Authorization"));
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "khong tim thay token" });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("decoded", decoded);

    req.userId = decoded.userId;
    console.log("decoded", req.userId);
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(403)
      .json({ success: false, message: "token khong hop le" });
  }
};

module.exports = verifyToken;
