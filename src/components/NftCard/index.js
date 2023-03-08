import React from 'react';
import nftVector from '../../assets/images/nft.jpeg';

const NftCard = ({ nft }) => {
  const { title, media, description } = nft;

  // default NFT pic
  let thumbnail = '';
  if (media[0]) {
    thumbnail = media[0].thumbnail;
  }

  const catchImageError = (e) => {
    console.log({ e });
  };

  return (
    <div className="card">
      <div className="card__image">
        <img src={thumbnail} alt={title} onError={catchImageError} />
      </div>
      <div className="card__content">
        <p>{description}</p>
        <div className="card__content--title">
          <h2>{title}</h2>
        </div>
      </div>
      <a href="#"></a>
    </div>
  );
};

export default NftCard;
