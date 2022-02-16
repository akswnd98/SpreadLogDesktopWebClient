import 'reflect-metadata';
import { injectable } from "inversify";

@injectable()
export default abstract class Node {
  indegree: number;

  nextNodes: Node[] = [];
  prevNodes: { [key in string]?: Node } = {};

  constructor () {
    this.indegree = 0;
  }

  abstract doTask (): void;

  abstract handleFail (): void;
}
