const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  PersonId: {
    type:String,
  },  
  FullName: {
    FirstName: String,
    MiddleName: String,
    LastName: String
  },
  Gender: String,
  DateOfBirth: Date,
  Age: Number,        // auto calculate
  Address: {
    FlatNumber: String,
    SocietyName: String,
    AreaName: String
  },
  City: String,
  State: String,
  Pincode: Number,
  PhoneNo: Number,                  // should be optional
  MobileNo: {
    type:Number,
    unique: true,
    // minLength: 10,
    // maxLength: 10
  },
  PhysicalDisability: {
    type: String,
    default: 'null'
  },                            // optional
  MaritalStatus: String,
  Education: String,
  BirthSign: {
    type: String,
    default: 'null'
  },                        // optional
  isAuthorized: { type: String, default: 'E' }   // E-Entry, R-Reject, A-Approved, P-Pending/Inactive
});

const Person = (module.exports = mongoose.model(
  "Person",
  personSchema,
  "Person"
));
