// import GraphVisHandler from '@/src/EBAttribute/GraphVisHandler';
// import PostGraph from '@/src/data-binding/Model/PostGraph';
// import Static from '@/src/admin/inversify.config';
// import EBGraphVis from '@/src/EBGraphVis';
// import { SYMBOLS } from '@/src/admin/types';

// export default class NodeContextMenu extends GraphVisHandler {
//   constructor () {
//     super({ eventName: 'oncontext' });
//   }

//   handle (params: any) {
//     params.event.preventDefault();
//     params.event.stopPropagation();
//     const graphVis = Static.instance.get<EBGraphVis>(SYMBOLS.EBGraphVis);
//     const id = graphVis.network.getNodeAt(params.pointer.DOM);
//     const model = Static.instance.get<PostGraph>(SYMBOLS.PostGraph);
//     const node = model.data.nodes.find((v) => v.data.id == id);
//     console.log('node contextmenu');
//   }
// }
