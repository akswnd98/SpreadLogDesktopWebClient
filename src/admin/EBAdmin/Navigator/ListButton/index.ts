import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';
import { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { html, render } from 'lit-html';
import list from '@/assets/images/list.svg';

@injectable()
export default class ListButton extends EBElement {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <img src='${list}'></img>
      `,
      this.rootElement,
    );
  }
}

customElements.define('list-button', ListButton);
