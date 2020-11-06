import { Token } from "../config/config";

export const PROXY_URL = "https://api.pexels.com/";
export const options = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + Token,
  },
};
