import * as A from 'fp-ts/Array';
import { Refinement } from 'fp-ts/Refinement';
import { pipe } from 'fp-ts/function';

import {
  Profession,
  Profession_Types,
  Scientist,
  Chemist,
  NonChemist,
} from '../types';

export const isProfessionChemist = (
  prof: Profession
): prof is typeof Profession_Types.chemist => prof === Profession_Types.chemist;

export const isChemist = (scientist: Scientist): scientist is Chemist =>
  isProfessionChemist(scientist.profession);

export const isNonChemist = (scientist: Scientist): scientist is NonChemist =>
  !isChemist(scientist);

export const filterScientistBy =
  <S extends Scientist>(ref: Refinement<Scientist, S>) =>
  (scientists: Scientist[]) =>
    pipe(scientists, A.filter(ref));
