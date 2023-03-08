import { useMemo, useState } from 'react';

import Loader from './components/Loader';
import NftCard from './components/NftCard';
import NftImage from './components/NftImage';

import nftData from './assets/json/nftData.json';

const { ownedNfts } = nftData;
const nfts = ownedNfts || [];

function App() {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [loader, setLoader] = useState(false);

  const filteredNfts = useMemo(
    () => nfts.slice(0, 10 * numberOfItems),
    [nfts, numberOfItems]
  );

  // shows load more button if there is still data to be presented
  const showLoadMore = useMemo(
    () => nfts.length > filteredNfts.length,
    [nfts, filteredNfts]
  );

  const loadMore = () => {
    console.log('loading... more');
    setLoader(true);

    setTimeout(() => {
      setNumberOfItems(numberOfItems + 1);
      setLoader(false);
    }, 2000);
  };

  return (
    <div className="app">
      <div className="appContainer">
        <div className="app__header">
          <div className="app__header--title">
            <h1>NFT List</h1>
            <p>Browse through the list of NFTs below</p>
          </div>

          <div className="app__header--image">
            <NftImage />
          </div>
        </div>

        <div className="app__body">
          {nfts.length ? (
            <>
              {filteredNfts.length && (
                <div className="app__body--list">
                  {filteredNfts.map((nft, i) => (
                    <NftCard key={i} nft={nft} />
                  ))}
                </div>
              )}

              <div className="app__body--loading">
                {showLoadMore && !loader && (
                  <button className="btn btn--primary" onClick={loadMore}>
                    Load More
                  </button>
                )}

                {loader && <Loader />}
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
