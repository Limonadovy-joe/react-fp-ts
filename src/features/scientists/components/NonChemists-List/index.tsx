import React from 'react';

import { useFilterScientists } from '../../hooks';
import { Scientists } from '../../types';
import { isNonChemist } from '../../models';

import { ScientistsList } from '../Scientists-List';

type NonChemistsListProps = { scientists: Scientists };

export const NonChemistsList = ({ scientists }: NonChemistsListProps) => {
  const { scientists: nonChemists } = useFilterScientists({
    ref: isNonChemist,
    scientists,
  });

  return <ScientistsList scientists={nonChemists} />;
};
