const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('password');
});

router.post('/', (req, res) => {
  const newURL = req.body;
  console.log(req.body)
  
})

module.exports = router;