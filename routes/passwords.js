const express = require('express');
const router  = express.Router();
const database = require("../db/queries/getpasswords");
const cookieParser = require('cookie-parser');

//adding cookie
router.use(cookieParser());

router.get('/', (req, res) => {
  const userID = req.cookies['user_id'];
  database.getPassword(userID)
    .then(data => {
      data.currentuser = userID;
      res.render('passwords', {data})
    })
    .catch((e) => res.send(e));
});

router.get('/filter', (req, res) => {
  //using req query to find filter?category= xxx
  const category = req.query.category || null; // Default to 'all' if no category is specified
  console.log(category);
  const userID = req.cookies['user_id'];
  database.filterByCategory(userID, category)
    .then(data => {
      data.currentuser = userID;
      res.render('passwords', {data})
    })
    .catch((e) => res.send(e));
})

router.post('/update/:id', (req, res) => {
  const urlID = req.params.id;
  database.updateInfo(urlID, req.body)
    .then(() => {
      //to see if we have update the data
      res.redirect('/passwords?update=success');
    })
    .catch(err => {
      res.status(500).send('Error updating user: ' + err.message);
    });
})

router.post('/delete/:id', (req, res) => {
  const urlID = req.params.id;
  database.deleteInfo(urlID)
    .then(() => {
      //to see if we have delete the data
      res.redirect('/passwords?delete=success');
    })
    .catch(err => {
      res.status(500).send('Error updating user: ' + err.message);
    });
})

module.exports = router;