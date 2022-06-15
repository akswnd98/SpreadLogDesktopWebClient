import Interface from '..';

export type ConstructorParam<Param> = {
  interfaces: Interface<Param>[];
};

export default class ContainerInterface<Param> extends Interface<Param> {
  interfaces: Interface<Param>[];

  constructor (payload: ConstructorParam<Param>) {
    super();
    this.interfaces = payload.interfaces;
  }

  async bind (param: Param) {
    await Promise.all(this.interfaces.map(async (v) => {
      await v.bind(param);
    }));
  }
}
