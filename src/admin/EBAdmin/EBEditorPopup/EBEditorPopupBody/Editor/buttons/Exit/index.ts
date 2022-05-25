import 'reflect-metadata';
import { injectable } from 'inversify';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { html, render } from 'lit-html';
import exitIcon from '@/assets/images/box-arrow-left.svg';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';
import Handler from './Handler';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Exit extends EBElement {
  constructor (payload: ConstructorParam) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new Handler({ id: 'root' }),
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='iconWrapper'>
          <img src=${exitIcon} />
        </div>
        <div id='textWrapper'>
          Exit
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-editor-popup-exit-button', Exit);
