const express = require('express')
const router = express.Router()

router.get('/articles', (req, res) => {
    res.send('route of articles')
})

module.exports = router