import React from 'react';

import { useFilterScientists } from '../../hooks';
import { Scientists } from '../../types';
import { isChemist } from '../../models';

import { ScientistsList } from '../Scientists-List';

type ChemistsListProps = { scientists: Scientists };

export const ChemistsList = ({ scientists }: ChemistsListProps) => {
  const { scientists: chemists } = useFilterScientists({
    ref: isChemist,
    scientists,
  });

  return <ScientistsList scientists={chemists} />;
};
