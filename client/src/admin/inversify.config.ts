import { Container } from 'inversify';
import module from './inversify.module';
import getDecorators from 'inversify-inject-decorators';

// export default async function () {
//   const container = new Container();
//   await container.loadAsync(module);
//   return container;
// }

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
    await container.loadAsync(module);
    return container;
  }

  static getDecorators () {
    console.log(this.fInstance);
    return getDecorators(this.fInstance!);
  }
}

const hello = 'hello';

export { hello };
