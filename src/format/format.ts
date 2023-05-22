import { LogLevel } from "../enums/logLevel";
interface Formatter {
  format(
    message: string,
    level: LogLevel,
    time?: boolean,
    upperCase?: boolean
  ): string;

  formatMultiple(data: string, args: any[]): string;
}

export class ResultFormatter implements Formatter {
  private getTimeStamp(): Date {
    return new Date();
  }

  format(
    message: string,
    level: LogLevel,
    time?: boolean,
    upperCase?: boolean,
    lowerCase?: boolean
  ): string {
    const timee = time ? `[${this.getTimeStamp().toISOString()}]` : "";

    let formatedMessage =
      upperCase && lowerCase
        ? message
        : upperCase
        ? message.toUpperCase()
        : lowerCase
        ? message.toLowerCase
        : message;

    const str = `${timee} [${LogLevel[level]}] ${formatedMessage}`;
    return str;
  }

  formatMultiple(data: string, args: any[]): string {
    // const formattedMessage = this.format(data)
    return (
      data +
      " " +
      [
        args.map((data) =>
          typeof data == "object" || "string" ? JSON.stringify(data) : data
        ),
      ] +
      "\n"
    );
  }
}
