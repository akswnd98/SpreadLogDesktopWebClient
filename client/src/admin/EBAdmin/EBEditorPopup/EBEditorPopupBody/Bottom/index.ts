import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { SYMBOLS } from '@/src/admin/types';
import OkButton from '@/src/admin/EBAdmin/EBEditorPopup/EBEditorPopupBody/Bottom/OkButton';
import CancelButton from '@/src/admin/EBAdmin/EBEditorPopup/EBEditorPopupBody/Bottom/CancelButton';
import { html, render } from 'lit-html';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

export type PayloadParam = {
  okButton: OkButton;
  cancelButton: CancelButton;
} & ParentConstructorParam;

@injectable()
export default class Bottom extends EBElement {
  constructor (
    @inject(SYMBOLS.EBEditorOkButton) okButton: OkButton,
    @inject(SYMBOLS.EBEditorCancelButton) cancelButton: CancelButton,
  ) {
    super({
      okButton,
      cancelButton,
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    render(
      html`
        ${payload.okButton}
        ${payload.cancelButton}
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-editor-popup-body-bottom', Bottom);
