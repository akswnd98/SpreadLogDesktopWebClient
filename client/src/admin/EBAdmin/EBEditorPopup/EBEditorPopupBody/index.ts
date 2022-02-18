import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import styles from './index.scss';
import Style from '@/src/EBAttribute/Style';
import { render, html } from 'lit-html';
import EBEditor from './EBEditor';
import { SYMBOLS } from '@/src/admin/types';
import OkButton from './OkButton';
import CancelButton from './CancelButton';

export type ConstructorParam = {
} & ParentConstructorParam;

export type PayloadParam = {
  okButton: OkButton;
  cancelButton: CancelButton;
} & ParentConstructorParam;

@injectable()
export default class EBEditorPopupBody extends EBElement {
  constructor (
    @inject(SYMBOLS.EBEditorOkButton) okButton: OkButton,
    @inject(SYMBOLS.EBEditorCancelButton) cancelButton: CancelButton,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      okButton,
      cancelButton,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <div class='top'>
          ${new EBEditor()}
        </div>
        <div class='bottom'>
          ${payload.okButton}
          ${payload.cancelButton}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-editor-popup-body', EBEditorPopupBody);
