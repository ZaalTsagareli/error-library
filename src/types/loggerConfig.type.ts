import { LogLevel } from "../enums/logLevel";
import { Logger } from "../interfaces/logger.interface";

export interface Transport {
  sendLog(message: string): void;
}

export type LoggerConfig = {
  level?: LogLevel;
  transport?: transporType;
};

export type transporType = {
  transport: "TCP" | "UDP" | "Console" | "Email";
};
