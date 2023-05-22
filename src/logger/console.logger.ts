import { LogLevel } from "../enums/logLevel";
import { ResultFormatter } from "../format/format";
import { Logger } from "../interfaces/logger.interface";
import { LoggerConfig, transporType } from "../types/loggerConfig.type";

export abstract class BaseLogger implements Logger {
  private config: LoggerConfig;
  public setLevel(level: LogLevel): void {
    this.config.level = level;
  }

  public setTransport(transport: transporType): void {
    this.config.transport = transport;
  }
  public checkLevel(level: LogLevel): boolean {
    return level >= this.config.level;
  }

  abstract log(level: LogLevel, message: string, ...args: unknown[]): void;

  trace(message: string, ...args: any[]): void {
    this.log(LogLevel.TRACE, message, ...args);
  }

  debug(message: string, ...args: any[]): void {
    this.log(LogLevel.DEBUG, message, ...args);
  }

  info(message: string, ...args: any[]): void {
    this.log(LogLevel.INFO, message, ...args);
  }

  warn(message: string, ...args: any[]): void {
    this.log(LogLevel.WARN, message, ...args);
  }

  error(message: string, ...args: any[]): void {
    this.log(LogLevel.ERROR, message, ...args);
  }

  fatal(message: string, ...args: any[]): void {
    this.log(LogLevel.FATAL, message, ...args);
  }
}

export class ConsoleLogger extends BaseLogger {
  private formatter: ResultFormatter;

  public constructor(formatter: ResultFormatter) {
    super();
    this.formatter = formatter;
  }

  log(level: LogLevel, message: string, ...args: any[]): void {
    if (!this.checkLevel(level)) {
      return;
    }

    process.stdout.write(this.formatter.formatMultiple(message, args));
  }
}
