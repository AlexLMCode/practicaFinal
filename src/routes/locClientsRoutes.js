const express = require("express");

const localizacionClienteSchema = require("../models/localizacionClientesModel");
const localizacionRoutes = express.Router();

localizacionRoutes.get("/", (req, res) => {
  localizacionClienteSchema
    .find()
    .then((data) => res.json({ Data: data }))
    .catch((err) => res.json({ Error: err }));
});

localizacionRoutes.post("/", (req, res) => {
  const loc = localizacionClienteSchema(req.body);

  loc
    .save()
    .then((data) => res.json({ Creado: data }))
    .catch((err) => res.json({ Error: err }));
});

localizacionRoutes.get("/:id", (req, res) => {
  localizacionClienteSchema
    .findById(req.params.id)
    .then((data) => res.json({ Data: data }))
    .catch((err) => res.json({ Error: err }));
});

localizacionRoutes.put("/:id", (req, res) => {
  const locId = req.params.id;

  const { latitude, longitude, city, description } = req.body;

  localizacionClienteSchema
    .updateOne(
      { _id: locId },
      {
        $set: {
          latitude,
          longitude,
          city,
          description
        },
      }
    )
    .then((data) => res.json({ Updated: data }))
    .catch((err) => res.json({ Error: err }));
});

localizacionRoutes.delete("/:id", (req, res) => {
  const locId = req.params.id;

  localizacionClienteSchema
    .deleteOne({ _id: locId })
    .then((data) => res.json({ Deleted: data }))
    .catch((err) => res.json({ Error: err }));
});

module.exports = localizacionRoutes;
