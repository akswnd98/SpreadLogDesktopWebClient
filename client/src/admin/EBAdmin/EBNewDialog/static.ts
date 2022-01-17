import EBNewDialog from '.';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import Model from './EBNewDialogBody/NameInputSync/Model';

export type GenerationParam = {
  model: Model;
};

export default class EBNewDialogStatic {
  static generate (payload: GenerationParam) {
    return new EBNewDialog({
      model: payload.model,
      attributes: [new Style({ styles: styles.toString() })],
    });
  }
}
