import mongoose from "mongoose";
import chalk from "chalk";
import { config } from "dotenv";
config();

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

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
