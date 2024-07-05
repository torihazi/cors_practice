const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(
  cors({
    origin: "http://localhost:8100",
  })
);

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.get("/data", (req, res) => {
  res.json({ name: "torihazi", age: 25 });
});

app.listen(PORT, () => console.log("Server is Runninng"));
