import { LogLevel } from "../enums/logLevel";

export type LogEvent = {
  level: LogLevel;
  message: string;
  args: any[];
};
