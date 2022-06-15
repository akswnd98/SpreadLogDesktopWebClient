import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { render, html } from 'lit-html';
import Title from './Title';
import Body from './Body';
import Date from './Date';
import PostChargingProcess from './ChargingProcess';
import CommentWriter from './CommentWriter';
import CommentList from './CommentList';
import SetNotifier from '@/src/app/data-binding/Notifier/PostingPostComments/Set';
import CommentListSetObserver from '@/src/app/data-binding/Observer/PositingPostComments/Set/CommentList';
import CommentWriterSetObserver from '@/src/app/data-binding/Observer/PositingPostComments/Set/CommentWriter';
import CommentListAddObserver from '@/src/app/data-binding/Observer/PositingPostComments/Add/CommentList';
import CommentWriterAddObserver from '@/src/app/data-binding/Observer/PositingPostComments/Add/CommentWriter';
import AddNotifier from '@/src/app/data-binding/Notifier/PostingPostComments/Add';
import Getter from '@/src/app/data-binding/Operator/PostingPostComments/Getter';

export type ConstructorParam = {
  chargingProcess: PostChargingProcess;
  title: Title;
  body: Body;
  date: Date;
  commentWriter: CommentWriter;
  commentList: CommentList;
  setNotifier: SetNotifier;
  addNotifier: AddNotifier;
  getter: Getter;
} & ParentConstructorParam;

@injectable()
export default class Post extends Element {
  chargingProcess: PostChargingProcess;
  postTitle: Title;
  body: Body;
  date: Date;
  commentWriter: CommentWriter;
  commentList: CommentList;

  constructor(@unmanaged() payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        ...payload.attributes ? payload.attributes : [],
      ],
    });
    this.chargingProcess = payload.chargingProcess;
    this.postTitle = payload.title;
    this.body = payload.body;
    this.date = payload.date;
    this.commentWriter = payload.commentWriter;
    this.commentList = payload.commentList;
    payload.setNotifier.attachObserver(new CommentListSetObserver({ commentList: payload.commentList }));
    payload.setNotifier.attachObserver(new CommentWriterSetObserver({ commentWriter: payload.commentWriter }));
    payload.addNotifier.attachObserver(new CommentListAddObserver({ commentList: payload.commentList, getter: payload.getter }));
    payload.addNotifier.attachObserver(new CommentWriterAddObserver({ commentWriter: payload.commentWriter, getter: payload.getter }));
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        ${payload.title}
        ${payload.date}
        ${payload.chargingProcess}
        ${payload.body}
        ${payload.commentWriter}
        ${payload.commentList}
      `,
      this.rootElement,
    );
  }
}

customElements.define('app-post', Post);
