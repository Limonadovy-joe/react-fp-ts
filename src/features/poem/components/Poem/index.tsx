import React from 'react';

import { Poem as PoemType } from '../../types';

type PoemProps = PoemType;

export const Poem = ({ lines }: PoemProps) => {
  return (
    <article>
      {lines.map((line, index) => {
        const LAST_INDEX = lines.length - 1;
        return (
          <React.Fragment key={`${index}`}>
            <p>{line}</p>
            {index !== LAST_INDEX ? <hr /> : null}
          </React.Fragment>
        );
      })}
    </article>
  );
};
