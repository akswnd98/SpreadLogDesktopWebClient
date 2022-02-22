import EBAdmin from './EBAdmin/inversified';
import styles from '../index.scss';
import 'reflect-metadata';
import ContainerStatic from './inversify.config';
import { SYMBOLS } from './types';
import EBNewDialogPopup from './EBAdmin/EBNewDialogPopup';
import EBEditorPopup from './EBAdmin/EBEditorPopup';
import NodeContextMenuPopup from './EBAdmin/GraphVis/NodeContextMenuPopup';
import ContextMenuPopup from './EBAdmin/GraphVis/ContextMenuPopup';

(async () => {
  const container = await ContainerStatic.getInstance();

  const stylesElement = document.createElement('style');
  stylesElement.textContent = styles.toString();
  document.head.appendChild(stylesElement);

  const root = document.getElementById('root')!;
  root.appendChild(container.get<EBAdmin>(SYMBOLS.EBAdmin));

  document.body.appendChild(container.get<EBNewDialogPopup>(SYMBOLS.EBNewDialogPopup));
  document.body.appendChild(container.get<EBEditorPopup>(SYMBOLS.EBEditorPopup));
  document.body.appendChild(container.get<ContextMenuPopup>(SYMBOLS.ContextMenuPopup));
  document.body.appendChild(container.get<NodeContextMenuPopup>(SYMBOLS.NodeContextMenuPopup));
})();
