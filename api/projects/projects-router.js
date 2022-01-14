// Write your "projects" router here!
const Projects = require('./projects-model');
const express = require('express');
const { checkId, checkFields, updateFields } = require('./projects-middleware');
const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.get()
  .then(projects => {
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

router.post("/", checkFields, (req, res, next) => {
  Projects.insert(req.body)
  .then(project => {
    res.json(project)
  })
  .catch(next)
})

router.put("/:id", checkId, updateFields, (req, res, next) => {
  Projects.update(req.params.id, req.body)
  .then(projectUpdate => {
    res.json(projectUpdate)
  })
  .catch(next)
})

module.exports = router