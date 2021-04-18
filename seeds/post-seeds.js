const { Post } = require('../models');

const postData = [
  {
    title: 'TechCrunch',
    post_text: 'Invest yourself in the business-verse of the tech world with one of the most popular technology blogs thriving this year- TechCrunch.',
    user_id: 1,
  },
  {
    title: 'Recode',
    post_text: 'Currently, owned by VOX media, Recode gives the most updated independent technology news, analysis trends, and reviews from the most respected and informed journalists as well as bloggers in media and technology.',
    user_id: 2,
  },
  {
    title: 'Mashable',
    post_text: 'Mashable is a world-renowned, entertainment, and multi-platform media channel. Powered by its own proprietary technology, this technology blog is the go-to source for tech, digital culture, and entertainment content for its influential and dedicated global audience!',
    user_id: 2,
  },
  {
    title: 'CNET',
    post_text: 'Following the latest trends in consumer technology with steadfast precision, CNET is one of the top technology blogs you can find on this list.',
    user_id: 3,
  },
  {
    title: 'The Verge',
    post_text: 'Another highly engaging technology blog operated by VOX Media publishing news, guidebooks, feature stories, product reviews, and podcasts is The Verge! It offers substantial coverage and no shortage of personalized perspective. Accordingly, their gadget reviews help make or break the future of technology itself.',
    user_id: 4,
  },
  {
    title: 'Venturebeat',
    post_text: 'VentureBeat is one of the leading tech blogs for transformation tech events and news. It reports breaking news on comprehensive content about prime tech businesses along with incisive coverage of the gaming industry. The blog comprises a series of tech-related articles, newsletters, general news, and businesses.',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
