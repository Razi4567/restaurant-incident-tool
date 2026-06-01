const express = require("express");
const router = express.Router();

const Incident = require("../models/Incident");

//Create incident 
router.post("/", async (req, res) => {
    try{
        const incident = new Incident(req.body);
        await incident.save();

        res.status(201).json({
            message: "Incident created succesfully",
            incident,
        });
    }
    catch(error){
        res.status(500).json({
            error: error.message,
        });
    }
});

//Get all incidents
router.get("/", async (req, res) => {
    try{
        const incidents = await Incident.find();

        res.status(200).json(incidents);
    }
    catch(error){
        res.status(500).json({
            error: error.message,
        });
    }
});

// Update incident status
router.put("/:id", async (req, res) => {

  try {

    const updatedIncident = await Incident.findByIdAndUpdate(

      req.params.id,

      {
        status: req.body.status,
      },

      {
        new: true,
      }

    );

    res.status(200).json(updatedIncident);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }
});

module.exports = router;