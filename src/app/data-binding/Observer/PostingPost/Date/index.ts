import IObserver from '@/src/data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PostingPostNotifier from '../../../ModelNotifier/PostingPost';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/types';
import BlogPost from '@/src/app/App/Body/Post/route';
import PostingPost from '@/src/app/data-binding/Model/PostingPost';

@injectable()
export default class PostDate implements IObserver {
  async update (subject: PostingPostNotifier, event: PostingPost) {
    const dateElement = Static.instance.get<BlogPost>(SYMBOLS.BlogPost).date;
    console.log(typeof event.data.firstUpload);
    dateElement.setFirstUpload(event.data.firstUpload);
    dateElement.setLastUpdate(event.data.lastUpdate);
  }
}
