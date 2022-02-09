import Axios from "axios";
import config from "../config";
import { get } from "./storage";

const token = get("token");

const http = Axios.create({
  baseURL: config.baseURI,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: "Bearer " + token,
  },
});

export default http;
