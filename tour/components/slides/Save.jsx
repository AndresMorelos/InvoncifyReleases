import React from 'react';
import path from 'path';
import Slide from '../Slide';
import SaveImg from '@images/Save.svg';

function Save({t}) {
  return (
    <Slide
      fromColor="#FFD200"
      toColor="#F7971E"
      heading={t('tour:slides:save:heading')}
      description={t('tour:slides:save:description')}
      imgSrc={SaveImg}
      imgSize="460px"
    />
  );
}

export default Save;
