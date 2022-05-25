import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';
import EBGraphVis from './GraphVis';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import { render, html } from 'lit-html';
import background from '@/assets/images/plane-background.svg';
import Navigator from './Navigator';

export type PayloadParam = {
  body: EBGraphVis
} & ParentConstructorParam;

@injectable()
export default class EBAdmin extends EBElement {
  constructor (
    @unmanaged() body: EBGraphVis,
  ) {
    super({
      attributes: [ new Style({ styles: styles.toString() }) ],
      body,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='navWrapper'>
          ${new Navigator()}
        </div>
        <img id='background' src=${background}></img>
        <div id='long'>
          ${payload.body}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-admin', EBAdmin);
