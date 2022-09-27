class PatientController {
  async patientHome(req, res, next) {
    res.render("patient/patientHome", {
      layout: "userLayout",
    });
  }
  //[GET]/patients/:patientID
  async detailInfo(req, res) {
    res.render("./patient/patientDetailInfo", {
      layout: "userLayout",
      title: "Thông tin cá nhân",
    });
  }
}

module.exports = new PatientController();
