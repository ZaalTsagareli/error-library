import { Levels } from "../enums/levels.enum";
import { logTypes } from "../enums/logTypes.enum";
import { HandleTransportConstructor } from "../interfaces/handleTransportConstructor.interface";
import { LoggerOptions } from "../interfaces/loggerOptions.interface";
import { HandleTransport } from "../transport/handleTransport";

export class Logger {
  private options: LoggerOptions;

  private constructor(options: LoggerOptions) {
    this.options = options;
  }

  public static getLogger(options: LoggerOptions): Logger {
    return new Logger(options);
  }

  public error(message: string, error?: Error): void {
    if (this.options.level >= Levels.ERROR) {
      const dataForTransport = this.getDataForTransport(
        message,
        logTypes.ERROR,
        error
      );
      new HandleTransport(dataForTransport);
    }
  }

  public warn(message: string): void {
    if (this.options.level >= Levels.WARN) {
      const dataForTransport = this.getDataForTransport(message, logTypes.WARN);
      new HandleTransport(dataForTransport);
    }
  }

  public debug(message: string): void {
    if (this.options.level >= Levels.DEBUG) {
      const dataForTransport = this.getDataForTransport(
        message,
        logTypes.DEBUG
      );
      new HandleTransport(dataForTransport);
    }
  }

  private formatMessage(message: string) {
    return this.options.format
      .replace("%t", new Date().toISOString())
      .replace("%s", message);
  }

  private getDataForTransport(
    message: string,
    type: logTypes,
    err?: Error
  ): HandleTransportConstructor {
    return {
      options: this.options,
      data: this.formatMessage(message),
      type: type,
      error: err,
    };
  }
}
