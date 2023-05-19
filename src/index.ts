import { Levels } from "./enums/levels.enum";
import { Transports } from "./enums/transports.enum";
import { Logger } from "./logger/logger";

const logger = Logger.getLogger({
  format: "%t - %s",
  level: Levels.WARN,
  transport: Transports.CONSOLE,
});

logger.warn("warning message");
logger.error("error happened", new Error());
logger.debug("dummy log");
