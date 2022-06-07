import IObserver from '@/src/data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PostingPostNotifier from '../../../Notifier/PostingPost';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import PostingPost from '@/src/app/data-binding/Model/PostingPost';
import PostPageElement from '@/src/app/App/Body/Post/route';

export type DataType = {
  firstUpload: Date;
  lastUpdate: Date;
};

@injectable()
export default class PostDate implements IObserver {
  async update (subject: PostingPostNotifier, event: DataType) {
    Static.instance.get<PostPageElement>(SYMBOLS.PostPageElement).date.setFirstUpload(event.firstUpload);
    Static.instance.get<PostPageElement>(SYMBOLS.PostPageElement).date.setLastUpdate(event.lastUpdate);
  }
}
