import Node from './Node';
import Static from './static';
import PriorityQueue from 'priorityqueuejs';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type Nodes = {
  [key in string]: Node;
};

export type PrevNodesMap<N extends Nodes> = {
  [nodeName in keyof N]: {
    [key in keyof N[nodeName]['prevNodes']]: keyof N;
  };
};

export type Check<T extends Task> = {
  [nodeName in keyof T['nodes']]:
    nodeName extends keyof T['prevNodesMap']
    ? {
      [key in keyof Required<T['nodes'][nodeName]['prevNodes']>]:
        key extends keyof T['prevNodesMap'][nodeName]
        ? T['nodes'][T['prevNodesMap'][nodeName][key]] extends Required<T['nodes'][nodeName]['prevNodes']>[key]
        ? true
        : false
        : false
    }
    : false
};

export type OverIncludeCheck<T extends Task> = {
  [nodeName in keyof T['prevNodesMap']]:
    nodeName extends keyof T['nodes']
    ? {
      [key in keyof T['prevNodesMap'][nodeName]]:
        key extends keyof T['nodes'][nodeName]['prevNodes']
        ? true
        : false
    }
    : false;
};

@injectable()
export default abstract class Task {
  readonly abstract nodes: Nodes;
  
  readonly abstract prevNodesMap: PrevNodesMap<typeof this.nodes>;

  pq: PriorityQueue<Node> = new PriorityQueue<Node>();

  readyTask () {
    this.constructGraph();
    this.readyAlgorithm();
  }

  constructGraph () {
    Object.entries(this.prevNodesMap).forEach(([nodeKey, prevNodesDict]) => {
      Object.entries(prevNodesDict).forEach(([nodeScopeNodeKey, globalScopeNodeKey]) => {
        Static.connect(this.nodes[nodeScopeNodeKey], this.nodes[nodeKey], globalScopeNodeKey)
      });
    });
  }

  doTask () {
    this.readyAlgorithm();
    while (!this.pq.isEmpty()) {
      this.pq.peek().doTask();
      this.pq.peek().nextNodes.forEach((v) => {
        v.indegree--;
        if (v.indegree === 0) this.pq.enq(v);
      });
      this.pq.deq();
    }
  }

  readyAlgorithm () {
    while (!this.pq.isEmpty()) this.pq.deq();
    Object.entries(this.nodes).forEach(([key, value]) => {
      value.indegree = Object.keys(value.prevNodes).length;
      if (value.indegree === 0) {
        this.pq.enq(value);
      }
    });
  }
}
