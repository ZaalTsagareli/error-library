import { logTypes } from "../enums/logTypes.enum";
import { Transports } from "../enums/transports.enum";
import { HandleTransportConstructor } from "../interfaces/handleTransportConstructor.interface";
import { LoggerOptions } from "../interfaces/loggerOptions.interface";

export class HandleTransport {
  private readonly otpions: LoggerOptions;
  private readonly data: string;
  private readonly type: logTypes;
  private readonly error: Error;
  constructor(data: HandleTransportConstructor) {
    this.otpions = data.options;
    this.data = data.data;
    this.type = data.type;
    this.error = data.error;
    this.handle();
  }

  private handle() {
    switch (this.otpions.transport) {
      case Transports.CONSOLE: {
        console[this.type](this.data, this.error ? this.error : "");
        break;
      }
      case Transports.UDP: {
        //send data to udp
        console.log("sending data via udp");
        break;
      }
      case Transports.TCP: {
        //send data to tcp
        console.log("sending data via tcp");

        break;
      }
      default: {
        console[this.type](this.data, this.error ? this.error : "");
      }
    }
  }
}
