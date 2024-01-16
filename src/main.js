import { server } from "./boostrap/server.js";
import chalk from "chalk";
import { connectToDatabase } from "./lib/config/db.config.js";
import { config } from "dotenv";
config();

const port = Number(process.env.PORT);

const bootstrap = async function () {
  try {
    // connect to the database
    await connectToDatabase()

    // start the application
    server.listen(port, () => {
      console.info(
        chalk.yellowBright(`🚀 Application is live and running on port ${port}`)
      );
    });
  } catch ( e )
  {
      process.exit(1)
  }
};

bootstrap();
