import DeleteNode from '.';
import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { SYMBOLS } from "@/src/admin/types";
import EBGraphVis from '@/src/admin/EBAdmin/EBGraphVis';

@injectable()
export default class Inversified extends DeleteNode {
  constructor (
    @inject(SYMBOLS.EBGraphVis) ebGraphVis: EBGraphVis,
  ) {
    super({
      ebGraphVis,
    });
  }
}
