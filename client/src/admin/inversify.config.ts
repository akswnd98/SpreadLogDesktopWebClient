import { Container } from 'inversify';
import module from './inversify.module';
import getDecorators from 'inversify-inject-decorators';
import basicModule from '../inversify.module';

export default class Static {
  static fInstance?: Container = undefined;
  static waitPromise: Promise<void> = Promise.resolve();

  static get instance () {
    return this.fInstance!;
  }
  
  static async getInstance () {
    await this.waitPromise;
    if (this.fInstance !== undefined) return this.fInstance!;
    await (this.waitPromise = this.waitPromise.then(async () => {
      this.fInstance = await this.generateInstance();
    }));
    return this.fInstance!;
  }

  static async generateInstance () {
    const container = new Container();
    await container.loadAsync(basicModule);
    await container.loadAsync(module);
    return container;
  }

  static getDecorators () {
    return getDecorators(this.fInstance!);
  }
}
