import IObserver from '@/src/owl-data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import INotifier from '@/src/owl-data-binding/INotifier';
import { EventType } from '../../Notifier/EditingPostId';

@injectable()
export default abstract class Editor implements IObserver {
   abstract update (subject: INotifier, event: EventType): Promise<void>;
}
