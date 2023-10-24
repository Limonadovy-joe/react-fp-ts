import React from 'react';

import { Poem } from '../features/poem';

import { poem } from '../mocks';

export const App = () => (
  <>
    <h1>POEMS</h1>
    <Poem {...poem} />
  </>
);
