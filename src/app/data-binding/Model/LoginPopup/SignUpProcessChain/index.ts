import 'reflect-metadata';
import { injectable } from 'inversify';
import CommandStateChain, { DataType } from '@/src/owl-data-binding/Model/CommandStateChain';

@injectable()
export default class SignUpProcessChain extends CommandStateChain {
}
