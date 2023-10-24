import React from 'react';

import { Scientist as ScientistType } from '../../types';
import { getImageUrl } from '../../../../utils';

type ScientistProps = ScientistType;

export const Scientist = ({
  accomplishment,
  imageId,
  name,
  profession,
}: ScientistProps) => {
  const imageUrl = getImageUrl({ imageId });

  return (
    <>
      <img src={imageUrl} alt={name} />
      <p>
        <b>{name}</b>
        {' ' + profession + ' '}
        know for {accomplishment}
      </p>
    </>
  );
};
