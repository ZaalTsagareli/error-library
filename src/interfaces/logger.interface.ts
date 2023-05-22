import { LogLevel } from "../enums/logLevel";
import { transporType } from "../types/loggerConfig.type";

export interface Logger {
  setTransport(transport: transporType): void;
  setLevel(logger: LogLevel): void;
  trace(message: string, ...args: any[]): void;
  debug(message: string, ...args: any[]): void;
  info(message: string, ...args: any[]): void;
  warn(message: string, ...args: any[]): void;
  error(message: string, ...args: any[]): void;
  fatal(message: string, ...args: any[]): void;
}
