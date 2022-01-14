// Write your "actions" router here!
const Actions = require('./actions-model');
const express = require('express');
const { checkId, checkFields, updateFields } = require('./actions-middlware');
const router = express.Router();

router.get("/", (req, res, next) => {
  Actions.get()
  .then(actions => {
    res.json(actions)
  })
  .catch(next)
})

router.get("/:id", checkId, (req, res, next) => {
  Actions.get(req.params.id)
  .then(actions => {
    res.json(actions)
  })
  .catch(next)
})

router.post("/", checkFields, (req, res, next) => {
  Actions.insert(req.body)
  .then(action => {
    res.json(action)
  })
  .catch(next)
})

router.put("/:id", checkId, updateFields, (req, res, next) => {
  Actions.update(req.params.id, req.body)
  .then(actionUpdate => {
    res.json(actionUpdate)
  })
  .catch(next)
})

router.delete("/:id", checkId, (req, res, next) => {
  Actions.remove(req.params.id)
  .then(actionDelete => {
    res.json(actionDelete)
  })
  .catch(next)
})

module.exports = router