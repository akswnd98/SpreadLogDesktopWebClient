import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Node from '.';

@injectable()
export default class Inversified extends Node {
  constructor (
    @unmanaged() id: number,
    @unmanaged() title: string,
  ) {
    super({
      data: {
        id,
        title,
      },
    });
  }
}
