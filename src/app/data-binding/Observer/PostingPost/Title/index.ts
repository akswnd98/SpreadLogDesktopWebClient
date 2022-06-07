import IObserver from '@/src/owl-data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PostingPostNotifier from '../../../Notifier/PostingPost';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import INotifier from '@/src/owl-data-binding/INotifier';
import PostPageElement from '@/src/app/App/Body/Post/route';

export type DataType = {
  title: string;
};

@injectable()
export default class Title implements IObserver {
  async update (subject: PostingPostNotifier, event: DataType) {
    Static.instance.get<PostPageElement>(SYMBOLS.PostPageElement).postTitle.setText(event.title);
  }
}
