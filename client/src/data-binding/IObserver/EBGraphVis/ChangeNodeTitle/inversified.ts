import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { SYMBOLS } from "@/src/admin/types";
import EBGraphVis from '@/src/admin/EBAdmin/GraphVis';
import ChangeNodeTitle from '.';

@injectable()
export default class Inversified extends ChangeNodeTitle {
  constructor (
    @inject(SYMBOLS.EBGraphVis) ebGraphVis: EBGraphVis,
  ) {
    super({
      ebGraphVis,
    });
  }
}
