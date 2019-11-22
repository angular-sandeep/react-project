require('dotenv').config({ 'path': '.env' });
const express = require("express");
const bodyPasrer = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// setting auth- middleware
const authMiddleware = require("./authMiddleware");

// router setting
const usersRouter = require("./routes/users");
const personRouter = require("./routes/person");
const rolesRouter = require("./routes/roles");
const loginStatusRouter = require("./routes/loginstatus");

const PORT = process.env.PORT;

const app = express();

/* #region Mongoose Database connectivity logic */
mongoose.Promise = global.Promise;
mongoose.connect(
  `${process.env.DATABASE_HOST}/UsersKnowledgeBase`,
  { useNewUrlParser: true }
);
const dbConnect = mongoose.connect;
if (!dbConnect) {
  console.log("sorry db connection is not established");
  return;
}


/* #region middleware used in application */
app.use(cors());
app.use(bodyPasrer.urlencoded({ extended: false }));
app.use(bodyPasrer.json());
app.use(authMiddleware());

// router setting
app.use("/api/users", usersRouter);
app.use("/api/person", personRouter);
app.use("/api/roles", rolesRouter);
app.use("/api/loginStatus", loginStatusRouter);


// server started setting
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
