import express from "express";
import morgan from "morgan";

const PORT = 4000;
//express어플리케이션 생성
const app = express();
const logger = morgan("dev");

const globalRouter = express.Router();
const handelHome = (req, res) => res.send("Home");
globalRouter.get("/", handelHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log("Server listening on port 4000!!🚀");

app.listen(PORT, handleListening);