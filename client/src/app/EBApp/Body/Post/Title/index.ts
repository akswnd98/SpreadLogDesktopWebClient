import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBLabel, { ConstructorParam as ParentConstructorParam } from '@/src/EBLabel';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Title extends EBLabel {
  constructor () {
    super({
      text: '',
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }

  setText (data: string) {
    this.shadowRoot!.getElementById('root')!.textContent = data;
  }
}

customElements.define('post-title', Title);
