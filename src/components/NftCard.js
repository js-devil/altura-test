import React from 'react';
import { getNftData } from '../utils';

const NftCard = ({ nft, onSelect }) => {
  const nftData = getNftData(nft);

  return (
    <div className="card" onClick={onSelect}>
      <div className="card__image">
        <img src={nftData.picture} alt={nftData.title} />
      </div>
      <div className="card__content">
        <p>{nftData.description}</p>
        <div className="card__content--title">
          <div>
            <h3>{nftData.title}</h3>
            <span>{nftData.price} ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
