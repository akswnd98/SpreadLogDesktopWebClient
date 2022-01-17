import EBNewDialogBody from '.';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import NameInputSyncStatic from './NameInputSync/static';
import EBVerticalLayout from '@/src/EBLayout/EBVerticalLayout';
import Model from './NameInputSync/Model';

export type GenerationParam = {
  model: Model;
};

export default class EBNewDialogBodyStatic {
  static generate (payload: GenerationParam) {
    return new EBNewDialogBody({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      childElements: [
        NameInputSyncStatic.generate(payload),
      ],
      layout: new EBVerticalLayout(),
    });
  }
}
