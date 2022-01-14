// Write your "projects" router here!
const Projects = require('./projects-model');
const express = require('express');
const checkId = require('./projects-middleware');
const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.get()
  .then(projects => {
    console.log(projects)
    res.json(projects)
  })
  .catch(next)
})

router.get("/:id", checkId, (req, res, next) => {
  Projects.get(req.params.id)
  .then(projects => {
    res.json(projects)
  })
  .catch(next)
})

module.exports = router