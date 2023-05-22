import { transporType } from "./types/loggerConfig.type";
import { LogLevel } from "./enums/logLevel";
import { ResultFormatter } from "./format/format";
import { ConsoleLogger } from "./logger/console.logger";
import { LoggerModule } from "./logger/logger";

const logger = new ConsoleLogger(new ResultFormatter());

const consoleLogger = new LoggerModule(logger).getLogger();

consoleLogger.setLevel(LogLevel.ALL);
consoleLogger.setTransport({ transport: "UDP" });
consoleLogger.debug("hey", { hello: "xadas" });
