import Static from '@/src/admin/inversify.config';
import { SYMBOLS } from '@/src/admin/types';
import VisNetworkHandler from '@/src/VisNetworkWrapper/Attribute/Handler'
import { Network } from 'vis-network/standalone'
import EBEditorPopup from '../../EBEditorPopup';

export default class Handler extends VisNetworkHandler {
  constructor () {
    super({
      eventName: 'doubleClick',
    });
  }

  handle (network: Network) {
    Static.instance.get<EBEditorPopup>(SYMBOLS.EBEditorPopup).show();
  }
}