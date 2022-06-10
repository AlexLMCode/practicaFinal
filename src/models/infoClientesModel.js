const mongoose = require("mongoose");

const infoClientesSchema = mongoose.Schema({
  firstName: { require: true, type: String },
  lastName: { require: true, type: String },
  loginCount: { require: true, type: Number },
  isWriter: { require: true, type: Boolean },
  worksWith: { require: true, type: Array },
  pets: {
    require: true,
    type: [
      Object
    ],
  },
});

module.exports = mongoose.model("InfoClientesCollection", infoClientesSchema);
