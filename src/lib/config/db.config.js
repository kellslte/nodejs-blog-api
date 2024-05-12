import {createConnection} from "mongoose";
import chalk from "chalk";
import appConfig from "./app.config.js";

export const connectToDatabase = async () => {
  try {
    const connection = createConnection(appConfig.provider.mongodburl);

    connection.on("connected", () => {
      console.info(
        chalk.blueBright(`📢 Database connection has been established!`)
      );
    });

    connection.on("error", (e) => {
      console.error(chalk.redBright("☣️ Database connection failed"), e);
    });
  } catch (e) {
    console.error(e)
    process.exit(1);
  }
};
