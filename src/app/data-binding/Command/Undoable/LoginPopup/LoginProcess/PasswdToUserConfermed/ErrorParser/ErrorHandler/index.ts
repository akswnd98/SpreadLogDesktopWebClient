export default abstract class ErrorHandler {
  abstract handle (): Promise<void>;
}
