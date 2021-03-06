export default abstract class Rule<Param> {
  abstract check (param: Param): Promise<boolean>;
}
