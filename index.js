const express = require("express");
const cors = require("cors");
const { apis } = require("./routers");
const { handleAPIError, handleInvalidRouteError } = require("./middlewares/errorMiddlewares");
const { initDB } = require("./db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: true
}));
app.use(apis);

app.get("/", (req, res) => {
  res.send("Server is running");
})

app.use(handleAPIError);
app.use(handleInvalidRouteError);

initDB();
app.listen(3001, () => {
  console.log("Server is running on port 3001");
})