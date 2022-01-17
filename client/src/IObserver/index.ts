export default interface IObserver {
  update (origin?: IObserver): void;
}
