import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import styles from './index.scss';
import Style from '@/src/elements/EBAttribute/Style';
import { html, render } from 'lit-html';
import { SYMBOLS } from '../../types';
import EBEditorPopupBody from './EBEditorPopupBody';

export type PayloadParam = {
  body: EBEditorPopupBody;
} & ParentConstructorParam;

@injectable()
export default class EBEditorPopup extends EBElement {
  constructor (
    @inject(SYMBOLS.EBEditorPopupBody) body: EBEditorPopupBody,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      body,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        ${payload.body}
      `,
      this.rootElement,
    );
    this.hide();
  }

  show () {
    this.rootElement.classList.remove('hide');
    this.rootElement.classList.add('show');
  }

  hide () {
    this.rootElement.classList.remove('show');
    this.rootElement.classList.add('hide');
  }
}

customElements.define('eb-editor-popup', EBEditorPopup);
