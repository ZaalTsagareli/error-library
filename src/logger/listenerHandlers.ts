import { Levels } from "../enums/levels.enum";
import { logTypes } from "../enums/logTypes.enum";
import { HandleTransportConstructor } from "../interfaces/handleTransportConstructor.interface";
import { LoggerOptions } from "../interfaces/loggerOptions.interface";
import { HandleTransport } from "../transport/handleTransport";

export class listenerHandlers {
  private readonly options: LoggerOptions;

  constructor(options: LoggerOptions) {
    this.options = options;
  }
  public handleErrorLog(message: string, error: Error) {
    if (this.options.level >= Levels.ERROR) {
      const dataForTransport = this.getDataForTransport(
        message,
        logTypes.ERROR,
        error
      );
      new HandleTransport(dataForTransport);
    }
  }

  public handleWarnLog(message: string) {
    if (this.options.level >= Levels.WARN) {
      const dataForTransport = this.getDataForTransport(message, logTypes.WARN);
      new HandleTransport(dataForTransport);
    }
  }

  public handleDebugLog(message: string) {
    if (this.options.level >= Levels.DEBUG) {
      const dataForTransport = this.getDataForTransport(
        message,
        logTypes.DEBUG
      );
      new HandleTransport(dataForTransport);
    }
  }
  private formatMessage(message: string, options) {
    return options.format
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
      data: this.formatMessage(message, this.options),
      type: type,
      error: err,
    };
  }
}
