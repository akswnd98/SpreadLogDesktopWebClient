// import EBAttribute, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute';
// import EBGraphVis from '@/src/EBGraphVis';
// import 'reflect-metadata';
// import { injectable, unmanaged } from 'inversify';
// import { NetworkEvents } from 'vis-network';

// export type ConstructorParam = {
//   eventName: NetworkEvents;
// } & ParentConstructorParam;

// @injectable()
// export default abstract class GraphVisHandler extends EBAttribute {
//   eventName: NetworkEvents;

//   constructor (@unmanaged() payload: ConstructorParam) {
//     super();
//     this.eventName = payload.eventName;
//   }

//   register (element: EBGraphVis) {
//     element.network.on(this.eventName, (params: any) => {
//       this.handle(params);
//     });
//   }

//   unregister (element: EBGraphVis) {
//   }

//   abstract handle (params: any): void;
// }
