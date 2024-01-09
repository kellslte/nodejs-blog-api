import { server } from "./boostrap/server.js";
import chalk from "chalk";
import { connectToDatabase } from "./lib/config/db.config.js";

const bootstrap = async function () {
  try {
    // connect to the database
    await connectToDatabase()

    // start the application
    server.listen(12903, () => {
      console.info(
        chalk.yellowBright(`🚀 Application is live and running on port 12903`)
      );
    });
  } catch ( e )
  {
      process.exit(1)
  }
};

bootstrap();
