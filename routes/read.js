
const readHandler = require('../handlers/readHandler');

const groupByAuthor = (allBooks) => {
  const sortedJSON = {};
  allBooks.map((element) => {
    const author = element.author;

    if (typeof sortedJSON[author] === 'undefined') {
      sortedJSON[author] = [];
    }
    sortedJSON[author].push({
      books_id: element.books_id, Name: element.name, rating: element.rating, like: element.like,
    });
  });
  console.log(sortedJSON);
  return sortedJSON;
};

module.exports = [{
  method: 'GET',
  path: '/read',
  handler: (req, reply) => {
    readHandler.then((allBooks) => {
      // console.log(allBooks);
      // reply(allBooks);
      console.log(allBooks);
      if (Object.keys(allBooks).length !== 0){
        const sortedJSON = groupByAuthor(allBooks);
        reply(sortedJSON);
      }
      else {
        reply({}); 
           }
    });
  },
}];
