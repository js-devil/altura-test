import React, { useCallback, useEffect } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import { formatDate, getDollarValue, getNftData } from '../utils';

const Modal = ({ nft, onClose }) => {
  const { ref: modalRef, clickedOutside } = useClickOutside();
  const nftData = getNftData(nft);

  useEffect(() => {
    if (!!nft) {
      document.querySelector('body').classList.add('modalOpen');
    }
  });

  const closeModal = useCallback(() => {
    document.querySelector('body').classList.remove('modalOpen');
    onClose();
  }, [onClose]);

  // detect outside click and trigger close modal
  useEffect(() => {
    if (clickedOutside) {
      closeModal();
    }
  }, [clickedOutside, closeModal]);

  // convert eth amount to dollar
  const dollarValue = getDollarValue(nftData.price);
  const openSeaLink = `https://testnets.opensea.io/assets/${nft.contract.address}/${nft.id.tokenId}`;

  return (
    <div id="nftModal" className={`modal ${!!nft && 'show'}`}>
      <div className="modal__content" ref={modalRef}>
        <div className="modal__header">
          <button className="btn modal__close" onClick={closeModal}>
            &times;
          </button>
        </div>

        <div className="modal__body">
          <div className="nft">
            <div className="nft__image">
              <img src={nftData.picture} alt={nftData.title} />
            </div>
            <div className="nft__details">
              <h3>{nftData.title}</h3>

              <div className="nft__details--price">
                {dollarValue && <h2>${dollarValue}</h2>}
                <small>{nftData.price} ETH</small>
              </div>

              <div className="nft__details--scroller">
                <div className="nft__details--meta">
                  <div>
                    <small>Blockchain</small>
                    <p>Ethereum</p>
                  </div>

                  <div>
                    <small>Token Standard</small>
                    <p>{nft.contractMetadata.tokenType}</p>
                  </div>

                  <div>
                    <small>Token ID</small>
                    <p>#{nft.contractMetadata.deployedBlockNumber}</p>
                  </div>

                  <div>
                    <small>Contract Address</small>
                    <p className="ellipsis">{nft.contract.address}</p>
                  </div>
                </div>

                <div className="nft__details--description">
                  <p>{nftData.description}</p>
                </div>
              </div>

              <div>
                <a
                  type="button"
                  href={openSeaLink}
                  target="_blank"
                  className="btn btn--primary"
                  rel="noreferrer"
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="modal__footer">
          <p>Last Updated: {formatDate(nftData.timeLastUpdated)}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
