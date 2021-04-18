const { User } = require('../models');

const userData = [
  {
    username: "Cesar",
    email: "cesar@gmail.com",
    password: "password1234"
  },
  {
    username: "Denis",
    email: "denis@gmail.com",
    password: "password1234"
  },
  {
    username: "George",
    email: "George@gmail.com",
    password: "password1234"
  },
  {
    username: "Matthew",
    email: "matthew@gmail.com",
    password: "password1234"
  },
  {
    username: "Rachel",
    email: "rachel@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);



module.exports = seedUsers;