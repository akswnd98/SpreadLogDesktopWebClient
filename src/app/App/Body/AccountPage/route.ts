import { BeforeEnterObserver, RouterLocation } from '@vaadin/router';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import AccountPage from '.';
import Static from '@/src/app/inversify.config';
import AccountPageNicknameSetter from '@/src/app/data-binding/Operator/AccountPageNickname/Setter';
import { SYMBOLS } from '@/src/app/symbols';
import PostGraphElement from './PostGraph';
import PostGraphSetter from '@/src/app/data-binding/Operator/PostGraph/Setter';
import axios from 'axios';

@injectable()
export default class Route extends AccountPage implements BeforeEnterObserver {
  postGraphSetter: PostGraphSetter;
  accountPageNicknameSetter: AccountPageNicknameSetter;

  constructor (
    @inject(SYMBOLS.PostGraphSetter) postGraphSetter: PostGraphSetter,
    @inject(SYMBOLS.AccountPageNicknameSetter) accountPageNicknameSetter: AccountPageNicknameSetter,
    @inject(SYMBOLS.PostGraphElement) postGraphElement: PostGraphElement,
  ) {
    super({
      postGraphElement,
    });
    this.postGraphSetter = postGraphSetter;
    this.accountPageNicknameSetter = accountPageNicknameSetter;
  }

  async onBeforeEnter (location: RouterLocation) {
    const nickname = location.params['nickname'];
    if (typeof nickname !== 'string') return;
    this.nickname = nickname;
    this.accountPageNicknameSetter.set(nickname);
    
    this.postGraphSetter.set({
      nodes: await this.getInitialPostNodes(nickname),
      edges: await this.getInitialPostEdges(nickname),
    });
  }

  protected async getInitialPostNodes (nickname: string) {
    if (nickname === '') {
      return [];
    } else {
      return (await axios.get('/api/post/getAllPostNodes', { params: { nickname } })).data.list;
    }
  }
  
  protected async getInitialPostEdges (nickname: string) {
    if (nickname === '') {
      return [];
    } else {
      return (await axios.get('/api/post/getAllPostEdges', { params: { nickname } })).data.list;
    }
  }
}

customElements.define('app-body-account-page-route', Route);
