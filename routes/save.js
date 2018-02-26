const Models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/save',
  handler: (req, reply) => {
    const booksArray = JSON.parse(req.payload);
    const PromiseArray = [];
    booksArray.map((books) => {
      const pr = Models.likes.update(
        { like: books.likes },
        { where: { bookid: books.booksId } },
      );
      PromiseArray.push(pr);
    });
    Promise.all(PromiseArray).then(() => {
      reply('Books update');
    });
  },
}];
