import IObserver from '@/src/data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/types';
import BlogPost from '@/src/app/App/Body/Post/route';
import PostingPost from '@/src/app/data-binding/Model/PostingPost';
import PostingPostNotifier from '../../../ModelNotifier/PostingPost';

@injectable()
export default class Body implements IObserver {
  async update (subject: PostingPostNotifier, event: PostingPost) {
    const bodyElement = Static.instance.get<BlogPost>(SYMBOLS.BlogPost).body;
    bodyElement.setMarkdown(event.data.body);
  }
}
