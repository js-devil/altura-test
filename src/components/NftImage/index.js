import React from 'react';

import maneki from '../../assets/images/maneki2.png';
import './styles.scss';

const NftImage = () => (
  <div className="flip">
    <img src={maneki} alt="maneki" />
  </div>
);

export default NftImage;
