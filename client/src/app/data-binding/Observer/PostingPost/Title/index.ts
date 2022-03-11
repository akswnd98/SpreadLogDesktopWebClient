import IObserver from '@/src/data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PostingPostNotifier from '../../../ModelNotifier/PostingPost';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/types';
import BlogPost from '@/src/app/EBApp/Body/Post/route';
import PostingPost from '@/src/app/data-binding/Model/PostingPost';

@injectable()
export default class Title implements IObserver {
  async update (subject: PostingPostNotifier, event: PostingPost) {
    const titleElement = Static.instance.get<BlogPost>(SYMBOLS.BlogPost).postTitle;
    titleElement.setText(event.data.title);
  }
}
