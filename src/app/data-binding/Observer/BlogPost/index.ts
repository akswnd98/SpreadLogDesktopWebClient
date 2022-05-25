import IObserver from '@/src/data-binding/IObserver';
import PostingPostModel, { DataType } from '@/src/app/data-binding/Model/PostingPost';
import PostingPostNotifier from '../../ModelNotifier/PostingPost';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/types';
import 'reflect-metadata';
import { injectable } from 'inversify';
import BlogPost from '@/src/app/App/Body/Post';

@injectable()
export default class BlogPostObserver implements IObserver {
  async update (subject: PostingPostNotifier, event: DataType) {
    const blogPost = Static.instance.get<BlogPost>(SYMBOLS.BlogPost);
    blogPost.viewer.setMarkdown(subject.model.data.body);
  }
}
