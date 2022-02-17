import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import styles from './index.scss';
import Style from '@/src/EBAttribute/Style';
import { render, html } from 'lit-html';
import EBButton from '@/src/EBButton';
import EBEditor from './EBEditor';
import { SYMBOLS } from '@/src/admin/types';
import type { ParameterizableNewable } from '@/src/inversify';

export type ConstructorParam = {
} & ParentConstructorParam;

export type PayloadParam = {
  EBButtonNewable: ParameterizableNewable<EBButton, ConstructorParameters<typeof EBButton>>;
} & ParentConstructorParam;

@injectable()
export default class EBEditorPopupBody extends EBElement {
  constructor (
    @unmanaged() EBButtonNewable: ParameterizableNewable<EBButton, ConstructorParameters<typeof EBButton>>,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      EBButtonNewable: EBButtonNewable,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        ${new EBEditor()}
        ${new payload.EBButtonNewable({
          text: 'OK',
          width: 100,
          height: 50,
          borderRadius: 5,
          backgroundColor: 'red',
        })}
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-editor-popup-body', EBEditorPopupBody);
