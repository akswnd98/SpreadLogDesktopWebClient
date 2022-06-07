import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import Label, { ConstructorParam as ParentConstructorParam } from '@/src/elements/Label';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Title extends Label {
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
