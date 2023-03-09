import React from 'react';

import nftVector from '../../assets/images/nft.jpeg';
import './styles.scss';

const NftImage = () => (
  <div className="flip">
    <img src={nftVector} alt="maneki" />
  </div>
);

export default NftImage;
