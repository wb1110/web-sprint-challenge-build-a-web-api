// add middlewares here related to projects
const Projects = require('./projects-model');

async function checkId (req, res, next) {
  try {
    const projectId = await Projects.get(req.params.id)
    if (projectId) {
      next()
    } else {
      next(res.status(404).json({ message: "No project with that ID exists!" }))
    }
  } catch(err) {
    next(err)
  }
}

async function checkFields (req, res, next) {
  try {
    if (req.body.name && req.body.description) {
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
  checkFields
}