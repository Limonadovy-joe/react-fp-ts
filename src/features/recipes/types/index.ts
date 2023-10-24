import * as D from 'io-ts/Decoder';

import { DecoderTypeOf } from 'lib/io-ts';

export const id = D.string;
export type Id = DecoderTypeOf<typeof id>;

export const name = D.string;
export type Name = DecoderTypeOf<typeof name>;

export const ingredients = D.array(D.string);
export type Ingredients = DecoderTypeOf<typeof ingredients>;

export const recipe = D.struct({ id, name, ingredients });
export type Recipe = DecoderTypeOf<typeof recipe>;
