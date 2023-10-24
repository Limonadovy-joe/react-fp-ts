import * as D from 'io-ts/Decoder';

import { DecoderTypeOf } from 'lib/io-ts';

export const poem = D.struct({ lines: D.array(D.string) });
export type Poem = DecoderTypeOf<typeof poem>;
