export default class Observer {
  update (origin?: Observer) {
    if (origin === this) return;
  }
}
