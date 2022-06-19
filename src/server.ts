import cookieParser from "cookie-parser";
import express from "express";
import { choresRouter } from "./routes";
import morganBody from "morgan-body";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

morganBody(server, { logAllReqHeader: true, maxBodyLength: 5000 });

// Add APIs
server.use("/chore", choresRouter);

// Export express instance
export { server };
