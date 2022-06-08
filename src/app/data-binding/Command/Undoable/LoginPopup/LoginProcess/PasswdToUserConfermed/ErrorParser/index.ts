import ErrorHandler from './ErrorHandler';

export default abstract class ErrorParser {
  abstract errorHandlerMap: {[key: string]: ErrorHandler};

  async parse (error: string[]) {
    for (let i = 0; i < error.length; i++) {
      await this.errorHandlerMap[error[i]].handle();
    }
  }
}
