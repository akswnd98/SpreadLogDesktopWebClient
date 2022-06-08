import IObserver from '@/src/owl-data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import ChargingProcess from '@/src/app/App/Body/Post/ChargingProcess';
import { SYMBOLS } from '@/src/app/symbols';
import { html, render } from 'lit-html';
import PrevPosts from '../../Model/PrevPosts';
import PrevPost from '@/src/app/App/Body/Post/ChargingProcess/PrevPost';
import Post from '@/src/app/App/Body/Post/route';

@injectable()
export default class PrevPostsObserver implements IObserver {
  async update () {
    const metadatas = Static.instance.get<PrevPosts>(SYMBOLS.PrevPosts).get().list;
    const element = Static.instance.get<Post>(SYMBOLS.PostPageElement).chargingProcess.shadowRoot!.getElementById('prev-post-list')!;
    console.log(metadatas);
    render(
      html`
        ${metadatas.map((v) => (
          html`
            ${new PrevPost({ metadata: { id: v.id, title: v.title } })}
          `
        ))}
      `,
      // html`
      //   ${metadatas.map((v) => ({ id: v.id, title: v.title }))}
      // `,
      element,
    );
  }
}
