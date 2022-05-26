import { interfaces, AsyncContainerModule } from 'inversify';
import { SYMBOLS } from './symbols';
import App from './App';
import AppBody from './App/Body';
// import GraphVis from './App/Body/GraphVis';
// import BlogPost from './App/Body/Post/route';
// import PostingId from './data-binding/Model/PostingId';
// import PostingPost from './data-binding/Model/PostingPost';
// import PostingPostNotifier from './data-binding/ModelNotifier/PostingPost';
// import BlogPostObserver from './data-binding/Observer/BlogPost';
import LoginPopup from './App/LoginPopup';
import LoginPopupBody from './App/LoginPopup/Body';
import CurrentLoginEmail from './data-binding/Model/CurrentLoginEmail';
import CurrentLoginEmailSetter from './data-binding/Operator/CurrentLoginEmail/Setter';
import CurrentLoginEmailGetter from './data-binding/Operator/CurrentLoginEmail/Getter';
import LoginPopupBaseState from './data-binding/State/LoginPopup/Base';
import LoginPopupPasswdState from './data-binding/State/LoginPopup/Passwd';
import LoginPopupCommandStacker from './data-binding/CommandStacker/LoginPopup';

// import PostingPostBodyObserver from '@/src/app/data-binding/Observer/PostingPost/Body';
// import PostingPostTitleObserver from '@/src/app/data-binding/Observer/PostingPost/Title';
// import PostingPostDateObserver from '@/src/app/data-binding/Observer/PostingPost/Date';

const module = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
  ) => {
    bind<App>(SYMBOLS.App).to(App).inSingletonScope();
    bind<AppBody>(SYMBOLS.AppBody).to(AppBody).inSingletonScope();
    // bind<GraphVis>(SYMBOLS.GraphVis).to(GraphVis).inSingletonScope();
    // bind<BlogPost>(SYMBOLS.BlogPost).to(BlogPost).inSingletonScope();
    // bind<PostingId>(SYMBOLS.PostingId).to(PostingId).inSingletonScope();
    // bind<PostingPost>(SYMBOLS.PostingPost).to(PostingPost).inSingletonScope();
    // bind<PostingPostNotifier>(SYMBOLS.PostingPostNotifier).to(PostingPostNotifier).inSingletonScope();
    // bind<BlogPostObserver>(SYMBOLS.BlogPostObserver).to(BlogPostObserver).inSingletonScope();
    bind<LoginPopup>(SYMBOLS.LoginPopup).to(LoginPopup).inSingletonScope();
    bind<LoginPopupBody>(SYMBOLS.LoginPopupBody).to(LoginPopupBody);
    bind<CurrentLoginEmail>(SYMBOLS.CurrentLoginEmail).to(CurrentLoginEmail).inSingletonScope();
    bind<CurrentLoginEmailSetter>(SYMBOLS.CurrentLoginEmailSetter).to(CurrentLoginEmailSetter).inSingletonScope();
    bind<CurrentLoginEmailGetter>(SYMBOLS.CurrentLoginEmailGetter).to(CurrentLoginEmailGetter).inSingletonScope();
    bind<LoginPopupBaseState>(SYMBOLS.LoginPopupBaseState).to(LoginPopupBaseState).inSingletonScope();
    bind<LoginPopupPasswdState>(SYMBOLS.LoginPopupPasswdState).to(LoginPopupPasswdState).inSingletonScope();
    bind<LoginPopupCommandStacker>(SYMBOLS.LoginPopupCommandStacker).to(LoginPopupCommandStacker).inSingletonScope();
    // bind<PostingPostBodyObserver>(SYMBOLS.PostingPostBodyObserver).to(PostingPostBodyObserver);
    // bind<PostingPostTitleObserver>(SYMBOLS.PostingPostTitleObserver).to(PostingPostTitleObserver);
    // bind<PostingPostDateObserver>(SYMBOLS.PostingPostDateObserver).to(PostingPostDateObserver);
  }
);

export default module;
