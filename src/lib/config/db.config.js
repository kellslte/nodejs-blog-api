import mongoose from "mongoose";
import chalk from "chalk";
import appConfig from "./app.config.js";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(appConfig.provider.mongodburl);

    mongoose.connection.on("open", () => {
      console.info(
        chalk.bgBlueBright(`📢 Database connection has been established!`)
      );
    });

    mongoose.connection.on("error", () => {
      console.error(chalk.redBright("☣️ Database connection stages"));
    });
  } catch (e) {
    process.exit(1);
  }
};
