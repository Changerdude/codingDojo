const express = require("express");
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const userRoutes = require("./routes/user.routes");
userRoutes(app);

app.listen(8000, () => console.log("The server is listening at port 8000"))