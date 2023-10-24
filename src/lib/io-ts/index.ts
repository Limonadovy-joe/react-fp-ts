import { TypeOf } from 'io-ts/Kleisli';
import * as E from 'fp-ts/Either';
import { URIS2 } from 'fp-ts/HKT';

export { Decoder } from 'io-ts/Decoder';

export type DecoderTypeOf<D, URI extends URIS2 = E.URI> = TypeOf<URI, D>;
