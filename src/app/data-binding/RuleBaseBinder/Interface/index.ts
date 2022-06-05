export default abstract class Interface<Param> {
  abstract bind (param: Param): Promise<void>;
}
