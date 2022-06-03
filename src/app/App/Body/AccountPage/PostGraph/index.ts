import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type ConstructorParam = {

}

@injectable()
export default class PostGraph extends Element {
  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
  }
}

customElements.define('account-page-post-graph', PostGraph);
