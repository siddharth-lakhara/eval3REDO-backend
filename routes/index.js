const books = require('./books');
const main = require('./main');
const ratings = require('./ratings');
const getall = require('./getall');
const updatedb = require('./updatedb');
const like = require('./like');
const dislike = require('./dislike');
const read = require('./read');
const save = require('./save');

module.exports = [].concat(main, books, ratings, getall, updatedb, like, dislike, read, save);
