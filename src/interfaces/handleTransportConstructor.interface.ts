import { logTypes } from "../enums/logTypes.enum";
import { LoggerOptions } from "./loggerOptions.interface";

export interface HandleTransportConstructor {
  options: LoggerOptions;
  data: string;
  type: logTypes;
  error?: Error;
}
