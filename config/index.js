import dotenv from "dotenv";

const env = dotenv.config();

export default {
  api: {
    apiKey: process.env.API_KEY,
  },
};
