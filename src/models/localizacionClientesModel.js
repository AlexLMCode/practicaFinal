const mongoose = require("mongoose");

const localizacionClienteSchema = mongoose.Schema({
  latitude: { require: true, type: Number },
  longitude: { require: true, type: Number },
  city: { require: true, type: String },
  description: { require: true, type: String },
});

module.exports= mongoose.model("LocalizacionClienteCollection", localizacionClienteSchema);
