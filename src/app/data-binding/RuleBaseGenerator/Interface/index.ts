export default abstract class Interface<Param, Return> {
  abstract generate (param: Param): Return | undefined;
}
