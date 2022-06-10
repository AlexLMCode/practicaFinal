const mongoose = require("mongoose");

const languagesSchema = mongoose.Schema({
  language: { require: true, type: String },
  edicion: { require: true, type: String },
  autor: { require: true, type: String },
});

module.exports= mongoose.model("LanguagesCollection", languagesSchema);
