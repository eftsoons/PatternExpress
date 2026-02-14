import express from "express";
import multer from "multer";
import { readdirSync } from "fs";
import globalError from "../../../constant/globalError";

const route = express.Router();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "img/");
  },
  filename: (_, file, cb) => {
    cb(null, `${Date.now()}-${readdirSync("img").length}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {},
});

route.post("/upload", upload.single("photo"), (req, res) => {
  if (req.file) {
    res.send(req.file.filename);
  } else {
    throw new globalError("US-10200");
  }
});

export default route;
