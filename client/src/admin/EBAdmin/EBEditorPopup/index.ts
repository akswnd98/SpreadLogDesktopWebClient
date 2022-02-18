import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import styles from './index.scss';
import Style from '@/src/EBAttribute/Style';
import { ConstructorParam } from '@/src/RawEBElement';
import { html, render } from 'lit-html';
import EBEditorPopupBody from './EBEditorPopupBody';
import { SYMBOLS } from '../../types';
import type { ParameterizableNewable } from '@/src/inversify';
import EBEditorOkButton from '@/src/admin/EBAdmin/EBEditorPopup/EBEditorPopupBody/OkButton';

export type PayloadParam = {
  body: EBEditorPopupBody;
  okButton: EBEditorOkButton;
} & ParentConstructorParam;

@injectable()
export default class EBEditorPopup extends EBElement {
  constructor (
    @inject(SYMBOLS.EBEditorPopupBody) body: EBEditorPopupBody,
    @inject(SYMBOLS.EBEditorOkButton) okButton: EBEditorOkButton,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      body,
      okButton,
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
