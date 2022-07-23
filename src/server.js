import express from "express";

const PORT = 4000;
//express어플리케이션 생성
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}

const routerLogger = (req, res, next) => {
  console.log(`routerLogger! ${req.path} `);
  next();
}

const methodLogger = (req, res, next) => {
  console.log(`methodLogger! ${req.method}`);
  next();
}

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed!");
  next();
}

const handleHome = (req,res) => {
  console.log(res.send);
  return res.send("<h1>Home</h1>");
}
const handleLogin = (req, res) => {
  return res.send({ message : "Login"});
}

const handleProtected = (req, res) => {
  return res.send("welcome to the private lounge");
}

app.use(routerLogger, methodLogger);
//app.get("/home", routerLogger, methodLogger, handleHome);
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);
const handleListening = () => console.log("Server listening on port 4000!!🚀");

app.listen(PORT, handleListening);