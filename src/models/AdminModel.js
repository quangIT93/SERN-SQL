const TblCourse = "Course";
const TblStudent = "Student";
const TblRegisterStudent = "RegisterStudent";
const TblSubject = "Subject";
const TblPerson = "Persons";
const dbModel = require("../models/SiteModel");

module.exports = {
  getAllManagers: async () => {
    const locations = await dbModel.all(TblPerson);
    return locations;
  },
  getManagers: async (value, key) => {
    const locations = await dbModel.get(value, TblPerson, key);
    return locations;
  },
  addManager: async (manager) => {
    console.log("manager2222", manager);
    const locations = await dbModel.add(manager, TblPerson);
    return locations;
  },
};
