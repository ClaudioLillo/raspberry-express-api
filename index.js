import app from './src/app'

const database = require("./src/database");
 

database.sync({ force: true }).then(() => {
    app.listen(3001, () => {
      console.log('%s listening at 3001');
    });
  
  });
