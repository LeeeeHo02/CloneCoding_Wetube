import express from "express";

const PORT = 4000;
//express어플리케이션 생성
const app = express();

const handleHome = (req,res) => {
  console.log(res.send);
  return res.send("Home");
}
const handleLogin = (req, res) => {
  return res.send("Login");
}

app.get("/", handleHome);
app.get("/login", handleLogin);
const handleListening = () => console.log("Server listening on port 4000!!🚀");

app.listen(PORT, handleListening);