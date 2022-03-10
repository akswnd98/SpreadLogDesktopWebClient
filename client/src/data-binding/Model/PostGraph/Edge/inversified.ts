import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Edge from '.';

@injectable()
export default class Inversified extends Edge {
  constructor (
    @unmanaged() id: number,
    @unmanaged() fromId: number,
    @unmanaged() toId: number,
  ) {
    super({
      data: {
        id,
        fromId,
        toId,
      },
    });
  }
}
