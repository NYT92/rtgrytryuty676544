const dotenv = require('dotenv');
const app = require('./src/app');

const data = dotenv.config()
const port = process.env.PORT || 5000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`\nš ... Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
