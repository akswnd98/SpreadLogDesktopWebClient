import 'reflect-metadata';
import { injectable } from 'inversify';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import exitIcon from '@/assets/images/box-arrow-left.svg';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import Handler from './Handler';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Exit extends Element {
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

customElements.define('editor-popup-exit-button', Exit);
