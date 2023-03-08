import nftVector from '../assets/images/nft.jpeg';

export const getNftData = (nft) => {
  const { title, media, metadata, contractMetadata } = nft;

  let nftTitle = title;
  if (!nftTitle) {
    nftTitle = contractMetadata.name;
  }

  const openSea = contractMetadata?.openSea;

  // default NFT pic
  let thumbnail = nftVector;
  if (media[0] && media[0].thumbnail) {
    thumbnail = media[0].thumbnail;
  } else if (openSea.imageUrl) {
    thumbnail = openSea.imageUrl;
  } else if (metadata?.image) {
    thumbnail = metadata.image;
  }

  return {
    ...nft,
    title: nftTitle,
    picture: thumbnail,
    description: nft.description || metadata.description || openSea.description,
    price: openSea.floorPrice || '0.00000001',
  };
};

export const getDollarValue = (ethAmount) => {
  const amount = Number(ethAmount);

  if (!isNaN(amount) && amount) {
    // current value of ETH in USD today
    const ethDollarValue = 1557.78;
    return (amount * ethDollarValue).toLocaleString('en');
  }

  return null;
};

export const formatDate = (date) => {
  const extractedDate = new Date(date).toDateString().slice(4, 15);
  const [month, day, year] = extractedDate.split(' ');

  return `${month} ${day}, ${year}`;
};
