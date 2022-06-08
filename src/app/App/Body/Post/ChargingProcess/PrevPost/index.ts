import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { html, render } from 'lit-html';
import Click from './Handler/Click';

export type MetadataType = {
  id: number;
  title: string;
};

export type ConstructorParam = {
  metadata: MetadataType;
};

export type PayloadParam =
  ConstructorParam
  & ParentConstructorParam;

@injectable()
export default class PrevPost extends Element {
  metadata: MetadataType;

  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        new Click({ id: payload.metadata.id }),
      ],
    } as PayloadParam);
    this.metadata = payload.metadata;
  }
  
  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <li>${payload.metadata.title}</li>
      `,
      this.rootElement,
    );
  }
}

customElements.define('charging-process-prev-post', PrevPost);
