import AppendNode from '.';
import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { SYMBOLS } from "@/src/admin/types";
import EBGraphVis from '@/src/admin/EBAdmin/GraphVis';

@injectable()
export default class Inversified extends AppendNode {
  constructor (
    @inject(SYMBOLS.EBGraphVis) ebGraphVis: EBGraphVis,
  ) {
    super({
      ebGraphVis,
    });
  }
}
