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

export type ConstructorParam = {
} & ParentConstructorParam;

export type PayloadParam = {
  okButton: OkButton;
} & ParentConstructorParam;

@injectable()
export default class EBEditorPopupBody extends EBElement {
  constructor (
    @inject(SYMBOLS.EBEditorOkButton) okButton: OkButton,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      okButton,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        ${new EBEditor()}
        <div class='bottom'>
          ${payload.okButton}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-editor-popup-body', EBEditorPopupBody);
