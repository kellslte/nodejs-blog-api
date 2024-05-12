import { server } from "./bootstrap/server.js";
import chalk from "chalk";
import { connectToDatabase } from "./lib/config/db.config.js";
import appConfig from "./lib/config/app.config.js";

const { port } = appConfig.server;

(async function () {
  try {
    // connect to the database
    await connectToDatabase();

    // start the application
    server.listen(port, () => {
      console.info(
        chalk.yellowBright(`🚀 Application is live and running on port ${port}`)
      );
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
