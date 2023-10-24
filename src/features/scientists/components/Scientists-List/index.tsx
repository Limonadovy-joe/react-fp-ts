import React from 'react';

import { Scientists as ScientistsType } from '../../types';

import { Scientist } from '../Scientist';

type ScientistsListProps = { scientists: ScientistsType };

export const ScientistsList = ({ scientists }: ScientistsListProps) => (
  <div>
    <h1>Scientists</h1>
    {scientists.map(({ id, ...rest }) => (
      <Scientist key={`${id}`} id={id} {...rest} />
    ))}
  </div>
);
