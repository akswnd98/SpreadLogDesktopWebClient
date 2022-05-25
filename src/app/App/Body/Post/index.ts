import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';
import { render, html } from 'lit-html';
import Title from './Title';
import Body from './Body';
import Date from './Date';

export type ConstructorParam = {
  title: Title;
  body: Body;
  date: Date;
} & ParentConstructorParam;

@injectable()
export default class Post extends EBElement {
  postTitle: Title;
  body: Body;
  date: Date;

  constructor(@unmanaged() payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        ...payload.attributes ? payload.attributes : [],
      ],
    });
    this.postTitle = payload.title;
    this.body = payload.body;
    this.date = payload.date;
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        ${payload.title}
        ${payload.date}
        ${payload.body}
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-app-post', Post);
