const Models = require('../models');

const readHandler = new Promise((resolve) => {
  const PromiseArray = [];
  const returnBookObject = [];
  Models.books.findAll({
    attributes: ['author', 'books_id', 'name', 'rating'],
  }).then((allBooks) => {
    if (allBooks.length === 0)
      resolve(0);
      else {
      allBooks.map((bookObject) => {
        const currentBookId = bookObject.books_id;
        const promise = Models.likes.findOne({ where: { bookid: currentBookId } });
        PromiseArray.push(promise);
      });
      Promise.all(PromiseArray).then((likeStatusObject) => {
        for (i in likeStatusObject) {
          allBooks[i].dataValues.like = likeStatusObject[i].like;
          returnBookObject[i] = allBooks[i].dataValues;
        }
        resolve(returnBookObject);
      });
      }
  });
});

module.exports = readHandler;
