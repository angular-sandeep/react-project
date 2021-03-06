const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  PersonId: {
    type: String,
  },
  FullName: {
    FirstName: String,
    MiddleName: String,
    LastName: String
  },
  Gender: String,
  DateOfBirth: Date,
  Age: Number,
  Address: {
    FlatNumber: String,
    SocietyName: String, 
    AreaName: String
  },
  City: String,
  State: String,
  Pincode: Number,
  PhoneNo: String,
  MobileNo: {
    type: Number,
  },
  PhysicalDisability: {
    type: String,
    default: 'null'
  },
  MaritalStatus: String,
  Education: String,
  BirthSign: {
    type: String,
    default: 'null'
  },
  isAuthorized: {
    type: String,
    default: 'Pending'
  }  //Reject, Approved, Pending
});

const TempPerson = (module.exports = mongoose.model(
  "TempPerson",
  personSchema,
  "TempPerson"
));