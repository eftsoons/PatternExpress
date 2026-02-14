import express from "express";
import { existsSync } from "fs";
import globalError from "../../../constant/globalError";

const route = express.Router();

route.get("/img/:namefile", (req, res) => {
  const namefile = req.params.namefile;

  if (namefile && typeof namefile == "string") {
    if (existsSync(`./img/${namefile}`)) {
      res.sendFile(namefile, { root: "./img" });
    } else {
      throw new globalError("US-10200");
    }
  }
});

export default route;
