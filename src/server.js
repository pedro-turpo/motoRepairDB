require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');

//authentication
db.authenticate()
  .then(() => console.log('Database connected🔗...'))
  .catch((error) => console.log(error));

//sync
db.sync({ force: false })
  .then(() => console.log('Database synced✅...'))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
