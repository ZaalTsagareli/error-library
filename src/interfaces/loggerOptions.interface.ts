import { Levels } from "../enums/levels.enum";
import { Transports } from "../enums/transports.enum";

export interface LoggerOptions {
  format: string;
  level: Levels;
  transport?: Transports;
}
