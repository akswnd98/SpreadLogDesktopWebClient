import Node from './Node';

export default class Static {
  static connect (prevNode: Node, nextNode: Node, prevKey: string) {
    prevNode.nextNodes.push(nextNode);
    nextNode.prevNodes[prevKey] = prevNode;
    nextNode.indegree++;
  }
}
