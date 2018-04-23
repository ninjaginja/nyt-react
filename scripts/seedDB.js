const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactarticlelist",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "Review: ‘Our Cartoon President’ Misses a Huuuge Target",
    snippet: "Amid an endless array of Trump spoofs, Showtime’s comedy manages to be mean and toothless at the same time.",
    date: "2018-02-09T16:00:01+0000",
    url:
      "https://www.nytimes.com/2018/02/09/arts/television/our-cartoon-president-review-trump-showtime.html"
  },
  {
    title: "George Weah: Don’t Forget About Liberia",
    snippet: "The world must not forget my country as it moves from recovery to development.",
    date:
      "2018-04-19T18:45:05+0000",
    url: "https://www.nytimes.com/2018/04/19/opinion/george-manneh-weah-liberia.html"
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
