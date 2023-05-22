import { LogLevel } from "../enums/logLevel";
import { ResultFormatter } from "../format/format";
import { BaseLogger, ConsoleLogger } from "./console.logger";
import { Logger } from "../interfaces/logger.interface";

export class LoggerModule {
  constructor(private readonly transport: Logger) {}

  getLogger(): Logger {
    return this.transport;
  }
}
