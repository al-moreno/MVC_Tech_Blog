const { User } = require('../models');

const userData = [
  {
    username: "Cesar",
    email: "cesar@gmail.com",
    password: "testpassword1"
  },
  {
    username: "Denis",
    email: "denis@gmail.com",
    password: "testpassword2"
  },
  {
    username: "George",
    email: "George@gmail.com",
    password: "testpassword3"
  },
  {
    username: "Matthew",
    email: "matthew@gmail.com",
    password: "testpassword4"
  },
  {
    username: "Rachel",
    email: "rachel@gmail.com",
    password: "testpassword5"
  }
];

const seedUsers = () => User.bulkCreate(userData);



module.exports = seedUsers;