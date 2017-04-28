const router = require('express').Router()
const Language = require('../db/').Language

router.get('/:type', (req, res, next) => {
  Language.findById(req.params.type)
    .then(foundLanguage => res.send(foundLanguage))
    .catcH(next)
})

module.exports = router
