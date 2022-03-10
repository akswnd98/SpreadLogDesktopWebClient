import 'reflect-metadata';
import { injectable, inject, unmanaged } from 'inversify';
import EBContainerElement from '@/src/EBContainerElement';
import EBVerticalLayout, { ChildElementsType } from '@/src/EBLayout/EBVerticalLayout';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';

export type ConstructorParam = {
  childElements: ChildElementsType;
} & ParentConstructorParam;

@injectable()
export default class EBContextMenuBody extends EBContainerElement<ChildElementsType> {
  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      ...payload,
      layout: new EBVerticalLayout(),
      attributes: [
        ...payload.attributes ? payload.attributes : [],
        new Style({ styles: styles.toString() }),
      ],
    });
  }
}

customElements.define('eb-context-menu-body', EBContextMenuBody);
