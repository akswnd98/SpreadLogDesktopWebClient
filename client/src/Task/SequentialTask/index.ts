export default abstract class SequentialTask<Context> {
  abstract prev?: SequentialTask<Context>;
  abstract next?: SequentialTask<Context>;

  doTask (context: Context) {
    this.next?.doTask(context);
  }

  handleFail (context: Context) {
    this.prev?.doTask(context);
  }
}
