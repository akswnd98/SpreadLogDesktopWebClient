export default abstract class Interface<Param, Return> {
  abstract generate (param: Param): Promise<Return | undefined>;
}
