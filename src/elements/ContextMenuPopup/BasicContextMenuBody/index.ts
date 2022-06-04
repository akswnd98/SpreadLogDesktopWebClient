import 'reflect-metadata';
import { injectable, inject, unmanaged } from 'inversify';
import ContainerElement, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element/ContainerElement';
import VerticalLayout, { ChildElementsType } from '@/src/owl-element/Element/ContainerElement/Layout/VerticalLayout';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import Element from '@/src/owl-element/Element';
import Layout from '@/src/owl-element/Element/ContainerElement/Layout';

export type ConstructorParam = {
  childElements: ChildElementsType;
} & Omit<ParentConstructorParam<ChildElementsType>, 'layout'>;

export type PayloadParam = {
} & ParentConstructorParam<ChildElementsType>;

@injectable()
export default class BasicContextMenuBody extends ContainerElement<ChildElementsType> {
  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      ...payload,
      layout: new VerticalLayout(),
      attributes: [
        ...payload.attributes ? payload.attributes : [],
        new Style({ styles: styles.toString() }),
      ],
    } as PayloadParam);
  }
}

customElements.define('basic-context-menu-body', BasicContextMenuBody);
