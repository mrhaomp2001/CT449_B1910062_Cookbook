const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");
const mongodb = require("mongoose")
//start server
async function startServer() {
  try {
    // await MongoDB.connect(config.db.uri);
    // console.log("Connect to database");

    mongodb.connect(config.db.uri)
    .then(() => {
      console.log("Conneted to the database!");
      // model.innitDB();
    })
    .catch((error) => {
      console.log("Cannot connet to the database!", error);
      process.exit();
    });
  
    const PORT = config.app.port;
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
  } catch (error) {
    console.log("Can't connect to database: " + error);
    process.exit();
  }
}

startServer();
