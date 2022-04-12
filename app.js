const express = require("express");
const app = express();

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("Connected and listening");
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
