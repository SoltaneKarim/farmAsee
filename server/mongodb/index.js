const connectDatabase = require('../database/config.js');
const User = require('./Models/userModels.js');

(async () => {
  try {
    await connectDatabase();
  // console.log("u r connected to mongo");
  } catch (error) {
    console.error('Error:', error);
  }
})();
