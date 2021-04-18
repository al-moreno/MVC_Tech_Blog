const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Thanks for the info, I learned a lot!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "How can I get on an email list for additional information?",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "I still don't like being forced to accept cookies!",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Cookies have their benefit, it helps when you know how it benefits you as a user.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "How much do you know about hashing for security?",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Salting your hashed output is a great addition to the security security features available. ",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;