import * as D from 'io-ts/Decoder';

import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';

import { DecoderTypeOf } from 'lib/io-ts';
import { Person } from 'types';

export const Profession_Types = {
  mathematician: 'mathematician',
  chemist: 'chemist',
  physicist: 'physicist',
  astrophysicist: 'astrophysicist',
} as const;

const _createProfession = (profTypes: typeof Profession_Types) => {
  type Keys = Array<keyof typeof Profession_Types>;
  return pipe(
    profTypes,
    (t) => Object.keys(t) as Keys,
    A.map(D.literal),
    ([fst, ...rest]) => D.union(fst, ...rest)
  );
};

export const profession = _createProfession(Profession_Types);
export type Profession = DecoderTypeOf<typeof profession>;

const _createScientist =
  <Prof extends string>(profession: Prof) =>
  <Pers extends D.Decoder<unknown, Person>>(person: Pers) =>
    pipe(
      D.struct({
        name: D.string,
        profession: D.literal(profession),
        accomplishment: D.string,
      }),
      D.intersect(person)
    );

export const mathematician = _createScientist(Profession_Types.mathematician)(
  Person
);
export type Mathematician = DecoderTypeOf<typeof mathematician>;

export const chemist = _createScientist(Profession_Types.chemist)(Person);
export type Chemist = DecoderTypeOf<typeof chemist>;

export const physicist = _createScientist(Profession_Types.physicist)(Person);
export type Physicist = DecoderTypeOf<typeof physicist>;

export const astrophysicist = _createScientist(Profession_Types.astrophysicist)(
  Person
);
export type Astrophysicist = DecoderTypeOf<typeof astrophysicist>;

export const scientist = D.union(
  mathematician,
  chemist,
  physicist,
  astrophysicist
);
export type Scientist = DecoderTypeOf<typeof scientist>;

export const scientists = D.array(scientist);
export type Scientists = DecoderTypeOf<typeof scientists>;

export const nonChemist = D.union(mathematician, physicist, astrophysicist);
export type NonChemist = DecoderTypeOf<typeof nonChemist>;
