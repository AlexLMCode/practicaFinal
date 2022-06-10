const express = require("express");

const languagesSchema = require("../models/languagesModel")
const languagesRoutes = express.Router();

languagesRoutes.get("/", (req, res) => {
  languagesSchema
    .find()
    .then((data) => res.json({ Data: data }))
    .catch((err) => res.json({ Error: err }));
});

languagesRoutes.post("/", (req, res) => {
  const language = languagesSchema(req.body);

  language
    .save()
    .then((data) => res.json({ Creado: data }))
    .catch((err) => res.json({ Error: err }));
});

languagesRoutes.get("/:id", (req, res) => {
  languagesSchema
    .findById(req.params.id)
    .then((data) => res.json({ Data: data }))
    .catch((err) => res.json({ Error: err }));
});

languagesRoutes.put("/:id", (req, res) => {
  const languageId = req.params.id;

  const { language, edicion, autor } = req.body;

  languagesSchema
    .updateOne(
      { _id: languageId },
      {
        $set: {
            language, edicion, autor
        },
      }
    )
    .then((data) => res.json({ Updated: data }))
    .catch((err) => res.json({ Error: err }));
});

languagesRoutes.delete("/:id", (req, res) => {
  const languageId = req.params.id;

  languagesSchema
    .deleteOne({ _id: languageId })
    .then((data) => res.json({ Deleted: data }))
    .catch((err) => res.json({ Error: err }));
});

module.exports = languagesRoutes;
