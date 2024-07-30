const express = require('express');
const router  = express.Router();
const database = require("../db/queries/getpasswords");
const cookieParser = require('cookie-parser');

//adding cookie
router.use(cookieParser());

router.get('/', (req, res) => {
  const userID = req.cookies['user_id'];
  console.log(req.body)
  database.getPassword(userID)
    .then(data => {
      console.log(data)
      res.render('passwords', {data})
    })
    .catch((e) => res.send(e));
});

router.post('/update/:id', (req, res) => {
  const userID = req.params.id;
  console.log(req.body)
  database.updateInfo(userID, req.body)
    .then(() => {
      res.redirect('/users');
    })
    .catch(err => {
      res.status(500).send('Error updating user: ' + err.message);
    });
})

module.exports = router;