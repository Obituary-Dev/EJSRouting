const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/version", (req, res) => {
  res.send('version 1.0 of "Hello World!"');
});
app.get("/author", (req, res) => {
  res.send("Code from Obituary");
});
app.get("/user", function (req, res) {
  res.render("index", {
    users: [{ name: "John" }, { name: "Mike" }, { name: "Samantha" }],
  });
});
/*
<ul>
 <% users.forEach(function(user){ %> <li>name : <%= user.name %> </li> <% })%>
</ul>
*/

app.listen(3000, () => {
  console.log("the server listens :3000");
});
