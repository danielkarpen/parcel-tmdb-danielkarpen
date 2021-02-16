import dotenv from "dotenv";

dotenv.config();

export default {
  api: {
    apiKey: process.env.API_KEY,
  },
};
