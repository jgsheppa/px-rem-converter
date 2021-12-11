import React from 'react';

import AvisioIcon from '../../../assets/images/avisio_logo.svg';
import AvisioLabel from '../../../assets/images/avisio_text.svg';

import { LogoBox } from './styles';

const AvisioLogoWithText = () => {
  return (
    <LogoBox>
      <AvisioIcon />
      <AvisioLabel />
    </LogoBox>
  );
};

export default AvisioLogoWithText;
