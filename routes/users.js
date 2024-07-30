/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser');
const database = require("../db/queries/users");

//adding cookie
router.use(cookieParser());

router.get('/', (req, res) => {
  const userID = req.cookies['user_id'];
  database.getUsers(userID)
    .then(data => {
      console.log(data)
      res.render('users', {data})
    })
    .catch((e) => res.send(e));
});

router.get('/1', (req, res) => {
  res.clearCookie("user_id");
  res.cookie("user_id", "1");
  const userID = req.cookies['user_id']
  //testing cookie works
  //console.log('cookies: ', userID)
  res.redirect('/');
})
router.get('/3', (req, res) => {
  res.clearCookie("user_id");
  res.cookie("user_id", "3");
  res.redirect('/');
})
module.exports = router;
