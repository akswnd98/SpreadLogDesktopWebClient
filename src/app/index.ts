import App from './App';
import styles from '../index.scss';
import ContainerStatic from './inversify.config';
import { SYMBOLS } from './symbols';
// import { SYMBOLS as BasicSYMBOLS } from '../symbols';
import LoginPopup from './App/LoginPopup';
import ContextMenuPopup from '../elements/ContextMenuPopup';
import PostGraphNewNodeDialogPopup from './App/Body/AccountPage/PostGraph/NewDialogPopup';
import EditorPopup from './App/EditorPopup';
import AvatarClickPopup from './App/AvatarClickPopup';
// import PostGraph from '../data-binding/Model/PostGraph';

(async () => {
  const container = await ContainerStatic.getInstance();

  const stylesElement = document.createElement('style');
  stylesElement.textContent = styles.toString();
  document.head.appendChild(stylesElement);

  const root = document.getElementById('root')!;
  root.appendChild(container.get<App>(SYMBOLS.App));

  document.body.appendChild(container.get<LoginPopup>(SYMBOLS.LoginPopup));
  document.body.appendChild(container.get<ContextMenuPopup>(SYMBOLS.ContextMenuPopup));
  document.body.appendChild(container.get<PostGraphNewNodeDialogPopup>(SYMBOLS.PostGraphNewNodeDialogPopup));
  document.body.appendChild(container.get<EditorPopup>(SYMBOLS.EditorPopup));
  document.body.appendChild(container.get<AvatarClickPopup>(SYMBOLS.AvatarClickPopup));
})();
