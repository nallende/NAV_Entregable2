const dotenv = require('dotenv');
dotenv.config({ path: './confg.env' });
const app = require('./app');

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
