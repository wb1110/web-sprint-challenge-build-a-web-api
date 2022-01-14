// add middlewares here related to actions
const Actions = require('./actions-model');
const Projects = require('../projects/projects-model');

async function checkId (req, res, next) {
  try {
    const projectId = await Actions.get(req.params.id)
    if (projectId) {
      next()
    } else {
      next(res.status(404).json({ message: "No action with that ID exists!" }))
    }
  } catch(err) {
    next(err)
  }
}

async function checkFields (req, res, next) {
  try {
    if (
      req.body.notes 
      && req.body.description 
      && req.body.project_id
      && Projects.get(req.body.project_id)
      ) {
      next()
    } else {
      next(res.status(400).json({ message: "Missing required field!" }))
    }
  } catch(err) {
    next(err)
  }
}

async function updateFields (req, res, next) {
  try {
    if (
      req.body.project_id && 
      req.body.description && 
      req.body.notes &&
      (Object.prototype.hasOwnProperty.call(req.body, "completed"))
      ) {
      next()
    } else {
      next(res.status(400).json({ message: "Missing required field!" }))
    }
  } catch(err) {
    next(err)
  }
}

module.exports = {
  checkId,
  checkFields,
  updateFields
}