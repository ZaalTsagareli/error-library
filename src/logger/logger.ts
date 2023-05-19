import { logTypes } from "../enums/logTypes.enum";
import { LoggerOptions } from "../interfaces/loggerOptions.interface";
import EventEmitter from "events";
import { listenerHandlers } from "./listenerHandlers";

export class Logger {
  private readonly options: LoggerOptions;
  private readonly listener: EventEmitter;
  private readonly listenerHandler: listenerHandlers;

  private constructor(options: LoggerOptions) {
    this.options = options;
    this.listener = new EventEmitter();
    this.listenerHandler = new listenerHandlers(this.options);
    this.startListen();
  }

  public static getLogger(options: LoggerOptions): Logger {
    return new Logger(options);
  }

  private startListen() {
    this.listener.on(logTypes.WARN, (message) =>
      this.listenerHandler.handleWarnLog(message)
    );

    this.listener.on(
      logTypes.DEBUG,
      (message) => () => this.listenerHandler.handleDebugLog(message)
    );

    this.listener.on(logTypes.ERROR, (message, error) =>
      this.listenerHandler.handleErrorLog(message, error)
    );
  }

  public error(message: string, error?: Error): void {
    this.listener.emit(logTypes.ERROR, message, error);
  }

  public warn(message: string): void {
    this.listener.emit(logTypes.WARN, message);
  }

  public debug(message: string): void {
    this.listener.emit(logTypes.DEBUG, message);
  }
}
