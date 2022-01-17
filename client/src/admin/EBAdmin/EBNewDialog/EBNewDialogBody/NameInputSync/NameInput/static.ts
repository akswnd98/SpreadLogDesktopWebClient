import NameInput from '.';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import Model from '../Model';

export type GenerationParam = {
  model: Model;
};

export default class Static {
  static generate (payload: GenerationParam) {
    try {
      return new NameInput({ attributes: [ new Style({ styles: styles.toString() }) ] });
    } catch (e) {
      console.log(e);
      throw Error('NameInputStatic.generate failed');
    }
  }
}
