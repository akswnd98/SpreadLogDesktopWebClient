import Style from '@/src/EBAttribute/Style';
import { injectable } from 'inversify';
import 'reflect-metadata';
import styles from './index.scss';

@injectable()
export default class Inversified extends Style {
  constructor () {
    super({ styles: styles.toString() });
  }
}
