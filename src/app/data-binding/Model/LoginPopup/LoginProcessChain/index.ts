import 'reflect-metadata';
import { injectable } from 'inversify';
import CommandStateChain from '@/src/owl-data-binding/Model/CommandStateChain';

@injectable()
export default class LoginProcessChain extends CommandStateChain {
}
