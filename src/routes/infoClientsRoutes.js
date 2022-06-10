const express = require("express");

const infoClientesSchema = require("../models/infoClientesModel");
const infoClientsRoutes = express.Router();

infoClientsRoutes.get("/", (req, res) => {
  infoClientesSchema
    .find()
    .then((data) => res.json({ Data: data }))
    .catch((err) => res.json({ Error: err }));
});

infoClientsRoutes.post("/", (req, res) => {
  const infoClient = infoClientesSchema(req.body);

  infoClient
    .save()
    .then((data) => res.json({ Creado: data }))
    .catch((err) => res.json({ Error: err }));
});

infoClientsRoutes.get("/:id", (req, res) => {
  infoClientesSchema
    .findById(req.params.id)
    .then((data) => res.json({ Data: data }))
    .catch((err) => res.json({ Error: err }));
});

infoClientsRoutes.put("/:id", (req, res) => {
  const infoClientId = req.params.id;

  const { firstName, lastName, loginCount, isWriter, worksWith, pets } = req.body;

  infoClientesSchema
    .updateOne(
      { _id: infoClientId },
      {
        $set: {
          firstName,
          lastName,
          loginCount,
          isWriter,
          worksWith,
          pets
        },
      }
    )
    .then((data) => res.json({ Updated: data }))
    .catch((err) => res.json({ Error: err }));
});

infoClientsRoutes.delete('/:id', (req, res)=>{
    const infoClientId = req.params.id;

    infoClientesSchema
      .deleteOne({_id: infoClientId})
      .then((data)=> res.json({Deleted: data}))
      .catch((err)=> res.json({Error: err}))
});

module.exports = infoClientsRoutes;
