"usr strict";
const express = require("express");
require("dotenv").config();
const app = express();
const handle500error = require("./error-handlers/500");
const handle404 = require("./error-handlers/404");
const PORT = process.env.PORT;
const foodrouter = require("./routes/food");
const clothesrouter = require("./routes/clothes");
app.use(express.json());

app.use(foodrouter);
app.use(clothesrouter);

app.use("*", handle404);
app.use(handle500error);
function start() {
  app.listen(PORT, () => {
    console.log(`listen to ${PORT}`);
  });
}
module.exports = {
  server: app,
  start: start,
};
