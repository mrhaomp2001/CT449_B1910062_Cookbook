const { mongodb } = require("mongoose");

class MongoDB {
  static connect = async (uri) => {
    mongodb.connect(uri)
      .then(() => {
        console.log("Conneted to the database!");
        model.innitDB();

      })
      .catch((error) => {
        console.log("Cannot connet to the database!", error);
        process.exit();
      });

    // if (this.client) return this.client;
    // this.client = await MongoClient.connect(uri);

    // return this.client;
  };

}

module.exports = MongoDB;
