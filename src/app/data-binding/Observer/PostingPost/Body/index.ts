import IObserver from '@/src/data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import BlogPost from '@/src/app/App/Body/Post/route';
import PostingPost from '@/src/app/data-binding/Model/PostingPost';
import PostingPostNotifier from '../../../Notifier/PostingPost';
import PostPageElement from '@/src/app/App/Body/Post/route';

export type DataType = {
  body: string;
};

@injectable()
export default class Body implements IObserver {
  async update (subject: PostingPostNotifier, event: DataType) {
    Static.instance.get<PostPageElement>(SYMBOLS.PostPageElement).body.setMarkdown(event.body);
  }
}
