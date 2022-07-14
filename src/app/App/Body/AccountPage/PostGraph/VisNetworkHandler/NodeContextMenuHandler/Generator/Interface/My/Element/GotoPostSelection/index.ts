import IconSelection from '@/src/elements/ContextMenuPopup/BasicContextMenuBody/IconSelection';
import 'reflect-metadata';
import { injectable } from 'inversify';
import gotoPost from '@/assets/images/goto-post.svg';
import Static from '@/src/app/inversify.config';
import Getter from '@/src/app/data-binding/Operator/NodeContextMenuSelectedId/Getter';
import { SYMBOLS } from '@/src/app/symbols';
import { Router } from '@vaadin/router';

@injectable()
export default class GotoPostSelection extends IconSelection {
  constructor () {
    super({
      text: 'Goto post',
      icon: gotoPost,
      handleClick: async () => { await this.handleClick(); },
    });
  }

  async handleClick () {
    const id = Static.instance.get<Getter>(SYMBOLS.NodeContextMenuSelectedIdGetter).get();
    Router.go(`/post/${id}`);
  }
}

customElements.define('node-context-menu-goto-post-selection', GotoPostSelection);
