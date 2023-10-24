import { useMemo } from 'react';

import { Refinement } from 'fp-ts/Refinement';

import { pipe } from 'fp-ts/function';

import { Scientist } from '../../types';
import { filterScientistBy } from '../../models';

type UseFilterScientistsParams<S extends Scientist> = {
  scientists: Scientist[];
  ref: Refinement<Scientist, S>;
};

export const useFilterScientists = <S extends Scientist>({
  scientists,
  ref,
}: UseFilterScientistsParams<S>) => {
  const scientistsFiltered = useMemo(
    () => pipe(scientists, filterScientistBy(ref)),
    [scientists, ref]
  );

  return { scientists: scientistsFiltered };
};
