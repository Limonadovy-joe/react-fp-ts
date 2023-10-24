import * as D from 'io-ts/Decoder';
import { pipe } from 'fp-ts/function';

export const ImageInfo = D.struct({ imageId: D.string });
export type ImageInfo = D.TypeOf<typeof ImageInfo>;

//  Branded types
interface IdBrand {
  readonly Id: unique symbol;
}

export type Id = number & IdBrand;

/**
 * ID Branded type -
 * Id must be greather or equal zero
 */
export const Id = pipe(
  D.number,
  D.refine((n): n is Id => n >= 0, 'Id')
);

export const Person = pipe(ImageInfo, D.intersect(D.struct({ id: Id })));
export type Person = D.TypeOf<typeof Person>;
