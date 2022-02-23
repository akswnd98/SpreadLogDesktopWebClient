import { interfaces, AsyncContainerModule } from 'inversify';
import { SYMBOLS } from './types';
import EBApp from './EBApp';
import GraphVis from './EBApp/Body/GraphVis';
import EBAppBody from './EBApp/Body';
import BlogPost from './EBApp/Body/Post/route';
import PostingId from './data-binding/Model/PostingId';
import PostingPost from './data-binding/Model/PostingPost';
import PostingIdNotifier from './data-binding/ModelNotifier/PostingId';
import PostingPostObserver from './data-binding/Observer/PostingPost';
import PostingPostNotifier from './data-binding/ModelNotifier/PostingPost';
import BlogPostObserver from './data-binding/Observer/BlogPost';

const module = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
  ) => {
    bind<EBApp>(SYMBOLS.EBApp).to(EBApp).inSingletonScope();
    bind<EBAppBody>(SYMBOLS.EBAppBody).to(EBAppBody).inSingletonScope();
    bind<GraphVis>(SYMBOLS.GraphVis).to(GraphVis).inSingletonScope();
    bind<BlogPost>(SYMBOLS.BlogPost).to(BlogPost).inSingletonScope();
    bind<PostingId>(SYMBOLS.PostingId).to(PostingId).inSingletonScope();
    bind<PostingPost>(SYMBOLS.PostingPost).to(PostingPost).inSingletonScope();
    bind<PostingIdNotifier>(SYMBOLS.PostingIdNotifier).to(PostingIdNotifier).inSingletonScope();
    bind<PostingPostObserver>(SYMBOLS.PostingPostObserver).to(PostingPostObserver).inSingletonScope();
    bind<PostingPostNotifier>(SYMBOLS.PostingPostNotifier).to(PostingPostNotifier).inSingletonScope();
    bind<BlogPostObserver>(SYMBOLS.BlogPostObserver).to(BlogPostObserver).inSingletonScope();
  }
);

export default module;
