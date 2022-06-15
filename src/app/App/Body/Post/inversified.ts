import Post from '.';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import Title from './Title';
import Body from './Body';
import PostDate from './Date';
import PostChargingProcess from './ChargingProcess';
import CommentWriter from './CommentWriter';
import CommentList from './CommentList';
import { SYMBOLS } from '@/src/app/symbols';
import SetNotifier from '@/src/app/data-binding/Notifier/PostingPostComments/Set';
import AddNotifier from '@/src/app/data-binding/Notifier/PostingPostComments/Add';
import Getter from '@/src/app/data-binding/Operator/PostingPostComments/Getter';

export type ConstructorParam = {
  commentWriter: CommentWriter;
  commentList: CommentList;
  setNotifier: SetNotifier;
  addNotifier: AddNotifier;
  getter: Getter;
};

@injectable()
export default class Inversified extends Post {
  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      chargingProcess: new PostChargingProcess(),
      title: new Title(),
      body: new Body(),
      date: new PostDate(),
      commentWriter: payload.commentWriter,
      commentList: payload.commentList,
      setNotifier: payload.setNotifier,
      addNotifier: payload.addNotifier,
      getter: payload.getter,
    });
  }
}

customElements.define('app-post-inversified', Inversified);
