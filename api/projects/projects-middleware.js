// add middlewares here related to projects
const Projects = require('./projects-model');

async function checkId (req, res, next) {
  console.log('checking id')
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

module.exports = checkId